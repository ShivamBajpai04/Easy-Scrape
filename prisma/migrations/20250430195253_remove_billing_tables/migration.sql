/*
  Warnings:

  - You are about to drop the column `creditsConsumed` on the `ExecutionPhase` table. All the data in the column will be lost.
  - You are about to drop the column `creditsCost` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the column `executionPlan` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the column `creditsConsumed` on the `WorkflowExecution` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExecutionPhase" DROP COLUMN "creditsConsumed";

-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "creditsCost",
DROP COLUMN "executionPlan",
ALTER COLUMN "status" SET DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "WorkflowExecution" DROP COLUMN "creditsConsumed";
