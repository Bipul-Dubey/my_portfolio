import { StarsBackground } from "@/components/ui/stars";
import { cn } from "@/lib/utils";
import React from "react";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StarsBackground
        starColor={"#000"}
        className={cn(
          "bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]"
        )}
      >
        {children}
      </StarsBackground>
    </>
  );
}
