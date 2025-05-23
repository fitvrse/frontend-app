import React from "react";
import { IMaskInput, IMaskInputProps } from "react-imask";
import { cn } from "@/lib/utils";

export const MaskedInput = React.forwardRef<HTMLInputElement, IMaskInputProps<any>>(
  ({ className, ...props }, ref) => {
    return (
      <IMaskInput
        {...props}
        inputRef={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0",
          className
        )}
      />
    );
  }
);
MaskedInput.displayName = "MaskedInput";
