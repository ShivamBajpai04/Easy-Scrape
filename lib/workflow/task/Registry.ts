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

export const TaskRegistry = {
  [TaskType.LAUNCH_BROWSER]: LaunchBrowserTask,
  [TaskType.NAVIGATE]: NavigateTask,
  [TaskType.PAGE_TO_HTML]: PageToHTMLTask,
  [TaskType.SELECT_ELEMENT]: SelectElementTask,
  [TaskType.EXTRACT_TEXT]: ExtractTextTask,
  [TaskType.FILL_INPUT]: FillInputTask,
  [TaskType.CLICK_ELEMENT]: ClickElementTask,
  [TaskType.WAIT]: WaitTask,
  [TaskType.EXTRACT_BULK]: ExtractBulkTask,
  [TaskType.EXTRACT_VIA_AI]: ExtractViaAITask,
  [TaskType.BUILD_JSON]: BuildJSONTask,
  [TaskType.READ_JSON]: ReadJSONTask,
  [TaskType.DELIVER_TO_WEBHOOK]: DeliverToWebhookTask,
};
