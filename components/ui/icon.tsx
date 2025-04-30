"use client";

import * as React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends LucideProps {
  name: LucideIcon;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name: Icon, className, size, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        className={cn(
          "transition-all duration-200 ease-in-out",
          "text-foreground/80 group-hover:text-foreground",
          className
        )}
        size={size || 20}
        strokeWidth={1.75}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };