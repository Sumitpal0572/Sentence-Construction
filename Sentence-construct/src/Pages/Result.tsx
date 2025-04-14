// src/Pages/Result.tsx
import { ArrowLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const score = 8; // example score
  const total = 10;
  const percent = (score / total) * 100;

  const handleBack = () => navigate("/");
  const handleDashboard = () => navigate("/dashboard"); // Make sure to route this page later

  const results = [
    { question: "Yesterday, we had a ______ discussion.", answer: "different", correct: true },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },
    { question: "The meeting ______ into chaos quickly.", answer: "turned", correct: false },

    // ...add more questions
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Sentence Construction</h2>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Score Section */}
      <div className="flex flex-col items-center justify-center py-10 space-y-4">
        <div className="relative w-36 h-36 rounded-full border-[10px] border-blue-900 flex items-center justify-center text-xl font-bold text-blue-900">
          {percent}%
        </div>
        <p className="text-gray-700 text-center px-4">
          You have completed the quiz successfully! Keep practicing to improve your score.
        </p>
        <Button className="bg-blue-900 text-blue-500 hover:bg-blue-700" onClick={handleDashboard}>
          Go to Dashboard
        </Button>
      </div>

      {/* Results Breakdown */}
      <div className="px-4 space-y-4 pb-10">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start border rounded-xl p-4 bg-white shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-800">{item.question}</p>
              <p className="text-sm text-gray-600 mt-1">Answer: {item.answer}</p>
            </div>
            <span
              className={`text-sm font-semibold ${
                item.correct ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.correct ? "Correct" : "Incorrect"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
