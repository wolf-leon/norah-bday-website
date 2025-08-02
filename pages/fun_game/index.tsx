import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next/router";

type Balloon = {
  id: number;
  left: number;
  color: string;
  createdAt: number;
};

export default function BalloonGame() {
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);
  const [poppedCount, setPoppedCount] = useState(0);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [showStopModal, setShowStopModal] = useState(false);
  const balloonId = useRef(0);

  const generateBalloon = (): Balloon => ({
    id: balloonId.current++,
    left: Math.random() * 80 + 10,
    color: ["red", "blue", "green", "yellow", "purple"][
      Math.floor(Math.random() * 5)
    ],
    createdAt: Date.now(),
  });

  const startGame = () => {
    setIsRunning(true);
    setPoppedCount(0);
    setBalloons([generateBalloon(), generateBalloon(), generateBalloon()]);
  };

  // Modified stopGame: just show modal
  const stopGame = () => {
    setShowStopModal(true);
  };

  const confirmStopRestart = () => {
    setShowStopModal(false);
    startGame();
  };

  const confirmStopGoBack = () => {
    setShowStopModal(false);
    setIsRunning(false);
    setBalloons([]);
    router.push("/leon_message");
    // Customize here if you want to navigate away or hide the game
  };

  const popBalloon = (id: number) => {
    setPoppedCount((prev) => prev + 1);
    setBalloons((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    if (isRunning && balloons.length < 3) {
      const interval = setInterval(() => {
        setBalloons((prev) => {
          if (prev.length < 3) {
            return [...prev, generateBalloon()];
          }
          return prev;
        });
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isRunning, balloons]);

  useEffect(() => {
    if (poppedCount >= 50) {
      setIsRunning(false);
    }
  }, [poppedCount]);

  useEffect(() => {
    if (!isRunning) return;

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setBalloons(
        (prev) => prev.filter((balloon) => now - balloon.createdAt < 6000), // keep only balloons younger than 6 seconds
      );
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, [isRunning]);

  return (
    <div className="relative w-full min-h-screen bg-sky-50 flex flex-col items-center justify-start pt-10 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
        🎈 Balloon Pop Game
      </h1>

      <div className="flex gap-4 mb-6">
        <Button color="success" onPress={startGame} isDisabled={isRunning}>
          Start
        </Button>
        <Button color="danger" onPress={stopGame} isDisabled={!isRunning}>
          Stop
        </Button>
      </div>

      <p className="text-lg text-sky-700 mb-6">
        Balloons Popped: <strong>{poppedCount}</strong>
      </p>

      {poppedCount >= 50 && (
        <div className="mt-4 px-4 py-3 bg-yellow-200 text-yellow-900 rounded-lg text-center max-w-md shadow-md">
          🎉 Well played, Norah! You popped 50 balloons!
          <br />
          <strong>Tap “Start” to play again!</strong>
        </div>
      )}

      {/* Balloon rendering */}
      <div className="absolute inset-0 pointer-events-none">
        {balloons.map((balloon) => (
          <button
            key={balloon.id}
            className="absolute flex flex-col items-center pointer-events-auto"
            style={{
              left: `${balloon.left}%`,
              bottom: 0,
              animation: "floatUp 6s linear forwards",
            }}
            onClick={() => popBalloon(balloon.id)}
            onTouchStart={() => popBalloon(balloon.id)}
          >
            <div
              className="balloon"
              style={{ backgroundColor: balloon.color }}
            />
            <div className="balloon-thread" />
          </button>
        ))}
      </div>

      {/* Modal for Stop confirmation */}
      {showStopModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-xs text-center shadow-lg">
            <p className="mb-4 text-lg font-semibold">
              Do you want to restart or go back to the game section?
            </p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={confirmStopRestart}
              >
                Restart
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={confirmStopGoBack}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .balloon {
          width: 60px;
          height: 80px;
          border-radius: 50% 50% 50% 50%;
          border: 4px solid white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
          cursor: pointer;
        }

        .balloon-thread {
          width: 2px;
          height: 25px;
          background-color: black;
          margin-top: -8px;
          z-index: 5;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
