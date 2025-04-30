"use client";

import * as LucideIcons from "lucide-react";
import { Icon, IconProps } from "./icon";

// Create enhanced versions of all commonly used icons
export function createEnhancedIcon(icon: LucideIcons.LucideIcon) {
  const EnhancedIcon = (props: Omit<IconProps, "name">) => (
    <Icon name={icon} {...props} />
  );
  EnhancedIcon.displayName = `Enhanced${icon.displayName || "Icon"}`;
  return EnhancedIcon;
}

// Export enhanced versions of commonly used icons
export const Brain = createEnhancedIcon(LucideIcons.Brain);
export const Calendar = createEnhancedIcon(LucideIcons.Calendar);
export const Check = createEnhancedIcon(LucideIcons.Check);
export const ChevronDown = createEnhancedIcon(LucideIcons.ChevronDown);
export const ChevronLeft = createEnhancedIcon(LucideIcons.ChevronLeft);
export const ChevronRight = createEnhancedIcon(LucideIcons.ChevronRight);
export const ChevronUp = createEnhancedIcon(LucideIcons.ChevronUp);
export const Circle = createEnhancedIcon(LucideIcons.Circle);
export const CircleAlert = createEnhancedIcon(LucideIcons.CircleAlert);
export const CirclePlay = createEnhancedIcon(LucideIcons.CirclePlay);
export const Clock = createEnhancedIcon(LucideIcons.Clock);
export const Code = createEnhancedIcon(LucideIcons.Code);
export const Copy = createEnhancedIcon(LucideIcons.Copy);
export const CornerDownRight = createEnhancedIcon(LucideIcons.CornerDownRight);
export const Database = createEnhancedIcon(LucideIcons.Database);
export const Ellipsis = createEnhancedIcon(LucideIcons.Ellipsis);
export const EllipsisVertical = createEnhancedIcon(LucideIcons.EllipsisVertical);
export const Eye = createEnhancedIcon(LucideIcons.Eye);
export const FileJson2 = createEnhancedIcon(LucideIcons.FileJson2);
export const FileText = createEnhancedIcon(LucideIcons.FileText);
export const Globe = createEnhancedIcon(LucideIcons.Globe);
export const GripVertical = createEnhancedIcon(LucideIcons.GripVertical);
export const Home = createEnhancedIcon(LucideIcons.Home);
export const House = createEnhancedIcon(LucideIcons.House);
export const Inbox = createEnhancedIcon(LucideIcons.Inbox);
export const Layers2 = createEnhancedIcon(LucideIcons.Layers2);
export const Link2 = createEnhancedIcon(LucideIcons.Link2);
export const LoaderCircle = createEnhancedIcon(LucideIcons.LoaderCircle);
export const Loader2 = createEnhancedIcon(LucideIcons.Loader2);
export const LockKeyhole = createEnhancedIcon(LucideIcons.LockKeyhole);
export const Menu = createEnhancedIcon(LucideIcons.Menu);
export const Moon = createEnhancedIcon(LucideIcons.Moon);
export const MoreHorizontal = createEnhancedIcon(LucideIcons.MoreHorizontal);
export const Mouse = createEnhancedIcon(LucideIcons.Mouse);
export const MousePointerClick = createEnhancedIcon(LucideIcons.MousePointerClick);
export const PanelLeft = createEnhancedIcon(LucideIcons.PanelLeft);
export const PenLine = createEnhancedIcon(LucideIcons.PenLine);
export const Play = createEnhancedIcon(LucideIcons.Play);
export const Search = createEnhancedIcon(LucideIcons.Search);
export const Send = createEnhancedIcon(LucideIcons.Send);
export const Shield = createEnhancedIcon(LucideIcons.Shield);
export const ShieldCheck = createEnhancedIcon(LucideIcons.ShieldCheck);
export const ShieldOff = createEnhancedIcon(LucideIcons.ShieldOff);
export const Shuffle = createEnhancedIcon(LucideIcons.Shuffle);
export const SquareDashedMousePointer = createEnhancedIcon(LucideIcons.SquareDashedMousePointer);
export const Sun = createEnhancedIcon(LucideIcons.Sun);
export const Text = createEnhancedIcon(LucideIcons.Text);
export const Trash = createEnhancedIcon(LucideIcons.Trash);
export const TriangleAlert = createEnhancedIcon(LucideIcons.TriangleAlert);
export const Upload = createEnhancedIcon(LucideIcons.Upload);
export const Waypoints = createEnhancedIcon(LucideIcons.Waypoints);
export const X = createEnhancedIcon(LucideIcons.X);
export const Zap = createEnhancedIcon(LucideIcons.Zap);

// For any icon not explicitly exported above
export const LucideIcon = (props: IconProps) => <Icon {...props} />;