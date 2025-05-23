// components/FormError.tsx
type FormErrorProps = {
  message?: string;
};

export default function FormError({ message }: FormErrorProps) {

  return (
    <div className="text-[10px] text-red-600 w-full">
      {message}
    </div>
  );
}
