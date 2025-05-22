// components/FormError.tsx
type FormErrorProps = {
  message?: string;
};

export default function FormError({ message }: FormErrorProps) {

  return (
    <div className="mt-2 text-sm text-red-600 w-full">
      {message}
    </div>
  );
}
