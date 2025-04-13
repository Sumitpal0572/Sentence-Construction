import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-between">
      {/* Top Bar: Timer + Quit */}
      <div className="w-full flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-700">0:15</span>
        <Button variant="ghost" size="sm">
          <X className="w-4 h-4 mr-1" />
          Quit
        </Button>
      </div>

      {/* Progress Bar (static for now) */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className="w-1/3 h-full bg-red-500" />
      </div>

      {/* Sentence */}
        <p className="text-lg text-gray-800 text-center">
          Yesterday, we had a <span className="underline">______</span> discussion about the project, but it <br /> <span className="underline">______</span> into an argument because everyone had <span className="underline">______</span><br /> opinions on the final.
        </p>

      {/* Options */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {["Different", "Turned", "Outcome", "Quick"].map((word, idx) => (
          <Button key={idx} variant="outline" className="px-6">
            {word}
          </Button>
        ))}
      </div>

      {/* Bottom Move Arrow */}
      <div className="mt-10">
        <Button size="icon" className="rounded-full h-12 w-12">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
