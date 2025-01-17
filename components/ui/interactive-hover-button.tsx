import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// interface InteractiveHoverButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
interface InteractiveHoverButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  loadingText?: string;
  successText?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, type = "button", disabled, isLoading, isSuccess, loadingText, successText, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        "bg-purple-600 hover:bg-purple-700",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {isLoading ? loadingText : isSuccess ? successText : children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-600">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
