// src/Pages/Quiz5.tsx
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Quiz5() {
  const navigate = useNavigate();

  const handleNext = () => {
    // Move to result/feedback page
    navigate("/result"); // ✅ Update once Result page is created
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-between">
      {/* Top Bar: Timer + Quit */}
      <div className="w-full flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-700">0:30</span>
        <Button variant="ghost" size="sm">
          <X className="w-4 h-4 mr-1" />
          Quit
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className="w-full h-full bg-red-500" />
      </div>

      {/* Sentence - all answers filled in */}
      <p className="text-lg text-gray-800 text-center">
        Yesterday, we had a <span className="underline"> Different </span> discussion about the project, but it <br /> 
        <span className="underline"> Turned </span> into an argument because everyone had 
        <span className="underline"> Quick </span> opinions on the final <span className="underline"> Outcome </span>
      </p>


      {/* Bottom Move Arrow */}
      <div className="mt-10">
        <Button size="icon" className="rounded-full h-12 w-12 bg-blue-900 hover:bg-blue-700" onClick={handleNext}>
          <ArrowRight className="text-white" />
        </Button>
      </div>
    </div>
  );
}
