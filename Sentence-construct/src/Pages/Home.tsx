// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen w-[100%] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <PencilLine className="h-10 w-10 text-gray-700" />
        </div>

        <h1 className="text-2xl font-semibold">Sentence Construction</h1>
        <p className="text-gray-600">
          Select the correct words to complete the sentence by arranging
          the provided options in the right order.
        </p>

        <div className="flex justify-around text-sm text-gray-700 pt-4">
          <div>
            <p className="font-semibold">Time Per Question</p>
            <p>30 sec</p>
          </div>
          <div>
            <p className="font-semibold">Total Questions</p>
            <p>10</p>
          </div>
          <div>
            <p className="font-semibold">Coins</p>
            <p>🪙 0</p>
          </div>
        </div>

        <div className="flex justify-center pt-6 gap-2">
          <Button variant="outline">Back</Button>
          <Button className="bg-blue-900 text-white hover:bg-blue-500" onClick={handleStart}>Start</Button>
        </div>
      </div>
    </div>
  );
}
