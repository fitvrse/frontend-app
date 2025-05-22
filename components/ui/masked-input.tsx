import { IMaskInput, IMaskInputProps } from 'react-imask';
import { cn } from '@/lib/utils'; // se estiver usando o utilitário do ShadCN

export const MaskedInput = (props: IMaskInputProps<any>) => {
  return (
    <IMaskInput
      {...props}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
    />
  );
};
