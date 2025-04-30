"use server";

import { periodToDateRange } from "@/lib/helper";
import prisma from "@/lib/prisma";
import {
  ExecutionPhaseStatus,
  Period,
  WorkflowExecutionStatus,
  WorkflowExecutionType,
} from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { eachDayOfInterval, format } from "date-fns";

export async function getPeriods() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const result = await prisma.workflowExecution.findMany({
    where: {
      userId,
    },
    orderBy: {
      startedAt: "asc",
    },
    take: 1,
  });

  if (result.length === 0) {
    return [
      {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      },
    ];
  }

  const periods: Period[] = [];
  let currDate = result[0].startedAt!;
  const endDate = new Date();

  while (currDate <= endDate) {
    periods.push({
      month: currDate.getMonth(),
      year: currDate.getFullYear(),
    });

    currDate.setMonth(currDate.getMonth() + 1);
  }

  return periods;
}

export async function getStatsCardsValue(period: Period) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const dateRange = periodToDateRange(period);

  const results = await prisma.workflowExecution.findMany({
    where: {
      userId,
      startedAt: {
        gte: dateRange.startDate,
        lte: dateRange.endDate,
      },
    },
    include: {
      phases: true,
    },
  });

  return {
    WorkflowExecutions: results.length,
    phaseExecutions: results.reduce((acc, curr) => acc + curr.phases.length, 0),
  };
}

export async function getWorkflowExecutionsStats(period: Period) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const dateRange = periodToDateRange(period);

  const executions = await prisma.workflowExecution.findMany({
    where: {
      userId,
      startedAt: {
        gte: dateRange.startDate,
        lte: dateRange.endDate,
      },
    },
  });

  const stats = eachDayOfInterval({
    start: dateRange.startDate,
    end: dateRange.endDate,
  })
    .map((date) => format(date, "yyyy-MM-dd"))
    .reduce((acc, date) => {
      acc[date] = {
        success: 0,
        failed: 0,
      };
      return acc;
    }, {} as any);

  executions.forEach((execution) => {
    const date = format(execution.startedAt!, "yyyy-MM-dd");

    if (execution.status === WorkflowExecutionStatus.COMPLETED) {
      stats[date].success++;
    }

    if (execution.status === WorkflowExecutionStatus.FAILED) {
      stats[date].failed++;
    }
  });

  const result = Object.entries(stats).map(([date, infos]) => ({
    date,
    ...infos,
  }));

  return result;
}
