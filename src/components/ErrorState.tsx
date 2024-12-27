import { useRouter } from "next/navigation";

interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 mb-4">{message}</p>
        <button
          onClick={() => router.push("/")}
          className="text-[#4EA8DE] hover:underline"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
