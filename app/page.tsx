"use client";

import { Runner } from "../types/index";
import React from "react";
import RunnerForm from "../components/Runnerform";
import QueueView from "../components/QueueView";
import Banner from "../components/banner";
import LeaderBoard from "../components/LeaderBoard";

const ARTHUR: Runner = {
  firstName: "Arthur",
  lastName: "Vansteenkiste",
  laps: 0,
};

export default function Home() {
  const [runners, setRunners] = React.useState<Runner[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

  // Load saved data when component mounts
  React.useEffect(() => {
    const savedRunners = localStorage.getItem("runners");
    const savedIndex = localStorage.getItem("currentIndex");

    if (savedRunners) {
      setRunners(JSON.parse(savedRunners));
    }
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex));
    }
  }, []);

  // Save data whenever runners or currentIndex changes
  React.useEffect(() => {
    if (runners.length > 0) {
      localStorage.setItem("runners", JSON.stringify(runners));
      localStorage.setItem("currentIndex", currentIndex.toString());
    }
  }, [runners, currentIndex]);

  const addRunner = (runner: Runner) => {
    setRunners((prev) => {
      // Check if runner already exists (excluding Arthur)
      if (prev.length === 0) {
        return [
          { ...runner, laps: 0 },
          { ...ARTHUR, laps: 0 },
        ];
      }

      // Always add the new runner and Arthur at the end, regardless of whether they exist
      return [...prev, { ...runner, laps: 0 }, { ...ARTHUR, laps: 0 }];
    });
  };

  const nextRunner = () => {
    if (runners.length === 0) return;

    // Check if we're at the last position - if so, don't allow next
    const isLastPosition = currentIndex === runners.length - 1;
    if (isLastPosition) return;

    setRunners((prev) =>
      prev.map((runner, idx) =>
        idx === currentIndex ? { ...runner, laps: runner.laps + 1 } : runner
      )
    );

    setCurrentIndex((prev) => prev + 1);
  };

  // Helper function to check if Next button should be disabled
  const isNextDisabled = () => {
    return runners.length === 0 || currentIndex === runners.length - 1;
  };

  // Get only the upcoming runners for the queue display (from current position onward)
  const upcomingQueue = runners.slice(currentIndex);

  const handleDelete = (index: number) => {
    // Convert relative queue index back to absolute runners array index
    const absoluteIndex = currentIndex + index;

    setRunners((prev) => {
      // Remove the runner at the specified absolute index
      const newQueue = prev.filter((_, i) => i !== absoluteIndex);

      // If queue becomes empty, reset currentIndex
      if (newQueue.length === 0) {
        setCurrentIndex(0);
        return [];
      }

      // Don't adjust currentIndex - this prevents showing already completed runners
      // Only adjust if we deleted the current runner (index 0 in the upcoming queue)
      if (index === 0 && currentIndex < newQueue.length) {
        // Current runner was deleted, but don't move backwards
        // Keep the same currentIndex so we stay at the same position in the queue
        return newQueue;
      }

      // If we deleted a runner after the current one, no adjustment needed
      return newQueue;
    });
  };

  // Clear everything with confirmation
  const clearAllData = () => {
    if (
      window.confirm(
        "Weet je zeker dat je alles wilt wissen? Dit verwijdert de hele queue en leaderboard en kan niet ongedaan worden gemaakt."
      )
    ) {
      setRunners([]);
      setCurrentIndex(0);
      setSearchTerm("");
      localStorage.removeItem("runners");
      localStorage.removeItem("currentIndex");
      localStorage.removeItem("backup");
    }
  };

  // Get unique runners from all runners (excluding Arthur)
  const getUniqueRunners = () => {
    const uniqueRunners = runners.reduce((acc, runner) => {
      const existingRunner = acc.find(
        (r) =>
          r.firstName === runner.firstName && r.lastName === runner.lastName
      );

      if (!existingRunner && runner.firstName !== "Arthur") {
        acc.push({ ...runner });
      }

      return acc;
    }, [] as Runner[]);

    return uniqueRunners.sort((a, b) => {
      const aName = `${a.firstName} ${a.lastName}`;
      const bName = `${b.firstName} ${b.lastName}`;
      return aName.localeCompare(bName);
    });
  };

  // Filter runners based on search term
  const filteredRunners = getUniqueRunners().filter((runner) => {
    const fullName = `${runner.firstName} ${runner.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  // Get total laps for a specific runner
  const getTotalLaps = (runner: Runner) => {
    return runners
      .filter(
        (r) =>
          r.firstName === runner.firstName && r.lastName === runner.lastName
      )
      .reduce((sum, r) => sum + r.laps, 0);
  };

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#e5e8e4" }}
    >
      <Banner />
      <div className="container mx-auto p-4">
        {/* Clear All Button */}
        {runners.length > 0 && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={clearAllData}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              🗑️ Wis Alles
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-lg p-6 shadow-xl"
            style={{ backgroundColor: "#8e8e8e" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Loper toevoegen
            </h2>
            <RunnerForm addRunner={addRunner} />

            {/* Search and Add Previous Runners */}
            {getUniqueRunners().length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Vorige Lopers
                </h3>

                {/* Search Input */}
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Zoek loper... (bijv. 'john' of 'doe')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-600 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:border-blue-500"
                    style={{ backgroundColor: "#e5e8e4" }}
                  />
                </div>

                {/* Filtered Runners List */}
                <div
                  className="max-h-48 overflow-y-auto rounded-lg"
                  style={{ backgroundColor: "#6e6e6e" }}
                >
                  {filteredRunners.length > 0 ? (
                    <div className="divide-y divide-gray-500">
                      {filteredRunners.map((runner, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            addRunner(runner);
                            setSearchTerm(""); // Clear search after adding
                          }}
                          className="w-full text-left p-3 hover:bg-gray-500 transition-colors flex justify-between items-center text-white"
                        >
                          <span className="font-medium">
                            {runner.firstName} {runner.lastName}
                          </span>
                          <span className="text-blue-300 text-sm">
                            {getTotalLaps(runner)} rondjes
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-gray-300 text-center text-sm">
                      {searchTerm
                        ? "Geen lopers gevonden"
                        : "Geen vorige lopers"}
                    </div>
                  )}
                </div>

                {/* Quick clear search */}
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mt-2 text-sm text-blue-300 hover:text-blue-200"
                  >
                    ✕ Wis zoekopdracht
                  </button>
                )}
              </div>
            )}

            {/* Message when at end of queue */}
            {isNextDisabled() && runners.length > 0 && (
              <div className="mt-4 p-4 bg-yellow-600 rounded-lg">
                <p className="text-sm text-white">
                  ⚠️ Je bent aan het einde van de queue. Voeg een nieuwe loper
                  toe om verder te gaan.
                </p>
              </div>
            )}
          </div>

          <div
            className="rounded-lg p-6 shadow-xl"
            style={{ backgroundColor: "#f56b5e" }}
          >
            <QueueView
              queue={upcomingQueue}
              currentIndex={0} // Always 0 since we're showing from current position
              nextRunner={nextRunner}
              onDelete={handleDelete}
              isNextDisabled={isNextDisabled()}
            />
          </div>
        </div>

        {/* LeaderBoard - Full width below the split screen */}
        <div className="mt-8">
          <LeaderBoard runners={runners} />
        </div>

        {/* Credits */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Ontwikkeld door Thomas Boone</p>
        </div>
      </div>
    </div>
  );
}
