import { TaskType } from "@/lib/types";
import { LaunchBrowserTask } from "./browser/LaunchBrowser";
import { NavigateTask } from "./browser/Navigate";
import { PageToHTMLTask } from "./browser/PageToHTML";
import { SelectElementTask } from "./browser/SelectElement";
import { ExtractTextTask } from "./browser/ExtractText";
import { FillInputTask } from "./browser/FillInput";
import { ClickElementTask } from "./browser/ClickElement";
import { WaitTask } from "./browser/Wait";
import { ExtractBulkTask } from "./browser/ExtractBulk";
import { ExtractViaAITask } from "./browser/ExtractViaAI";
import { BuildJSONTask } from "./data/BuildJSON";
import { ReadJSONTask } from "./data/ReadJSON";
import { DeliverToWebhookTask } from "./webhook/DeliverToWebhook";

export const TaskRegistry: Record<TaskType, any> = {
  [TaskType.LAUNCH_BROWSER]: LaunchBrowserTask,
  [TaskType.NAVIGATE_URL]: NavigateTask,
  [TaskType.PAGE_TO_HTML]: PageToHTMLTask,
  [TaskType.EXTRACT_TEXT_FROM_ELEMENT]: ExtractTextTask,
  [TaskType.FILL_INPUT]: FillInputTask,
  [TaskType.CLICK_ELEMENT]: ClickElementTask,
  [TaskType.WAIT_FOR_ELEMENT]: WaitTask,
  [TaskType.EXTRACT_DATA_WITH_AI]: ExtractViaAITask,
  [TaskType.ADD_PROPERTY_TO_JSON]: BuildJSONTask,
  [TaskType.READ_PROPERTY_FROM_JSON]: ReadJSONTask,
  [TaskType.DELIVER_VIA_WEBHOOK]: DeliverToWebhookTask,
  [TaskType.SCROLL_TO_ELEMENT]: SelectElementTask, // Assuming this is the closest match
};
