interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button disabled={loading} className="primary-btn h-10 ">
      {loading ? "Loading" : text}
    </button>
  );
}
