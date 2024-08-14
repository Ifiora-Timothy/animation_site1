import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const QuadComponent = ({
  children,
  color,
  height,
  double,
  paddinnY,
  className,
}: {
  children: ReactNode;
  color: string;
  paddinnY?: string;
  height?: string;
  double: boolean;
  className?: string;
}) => {
  const finalHeight = height ?? "sm:h-[50px] h-[30px]";
  return (
    <div
      data-double={double}
      className={cn(
        `trapezium p-3  pl-0 w-full flex items-center pr-[40px] ${finalHeight} ${color} ${paddinnY}`,
        className
      )}
    >
      {children}
    </div>
  );
};
