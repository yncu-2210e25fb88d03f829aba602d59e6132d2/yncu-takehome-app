import React from "react";
import { cn } from "@repo/react-ui/lib/utils/cn.ts";

interface LayoutProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: "center" | "start" | "end";
}

const Layout = ({
  className,
  children,
  align = "start",
  ...props
}: Readonly<LayoutProps>) => {
  return (
    <div
      className={cn(
        "font-montserrat flex h-full min-h-screen w-screen flex-row",
        align === "center" && "items-center justify-center",
        align === "start" && "items-start justify-start",
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-full flex-col overflow-auto">{children}</div>
    </div>
  );
};

export { Layout, type LayoutProps };
