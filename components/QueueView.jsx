export default function QueueView({
  queue,
  currentIndex,
  nextRunner,
  onDelete,
  isNextDisabled,
}) {
  const current = queue[currentIndex] || "Nog geen lopers";

  // Calculate the actual total laps for the current runner (combining duplicates)
  const getCurrentRunnerTotalLaps = () => {
    if (!current.firstName) return 0;

    // Find all instances of this runner in the full queue and sum their laps
    const allRunners = JSON.parse(localStorage.getItem("runners") || "[]");
    const totalLaps = allRunners
      .filter(
        (r) =>
          r.firstName === current.firstName && r.lastName === current.lastName
      )
      .reduce((sum, runner) => sum + runner.laps, 0);

    return totalLaps;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">Volgende lopers</h2>
      <div
        className="rounded-lg p-4 mb-4"
        style={{ backgroundColor: "#d45650" }}
      >
        <div className="text-sm text-gray-200">Huidige loper</div>
        <div className="text-xl font-bold text-white">
          {current.firstName
            ? `${current.firstName} ${
                current.lastName
              } (${getCurrentRunnerTotalLaps()} rondjes)`
            : current}
        </div>
      </div>

      <button
        onClick={nextRunner}
        disabled={isNextDisabled}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors mb-6 ${
          isNextDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-white hover:bg-opacity-80"
        }`}
        style={{
          backgroundColor: isNextDisabled ? "#6e6e6e" : "#d45650",
        }}
      >
        {isNextDisabled ? "Voeg eerst een loper toe" : "Next"}
      </button>

      <div className="space-y-2">
        {queue.map((runner, i) => {
          // Calculate total laps for each runner in the queue
          const allRunners = JSON.parse(
            localStorage.getItem("runners") || "[]"
          );
          const totalLaps = allRunners
            .filter(
              (r) =>
                r.firstName === runner.firstName &&
                r.lastName === runner.lastName
            )
            .reduce((sum, r) => sum + r.laps, 0);

          return (
            <div
              key={i}
              className={`flex items-center justify-between p-3 rounded-md ${
                i === currentIndex ? "bg-opacity-80" : ""
              }`}
              style={{
                backgroundColor: i === currentIndex ? "#d45650" : "#c55650",
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#8e8e8e" }}
                >
                  #{i + 1}
                </div>
                <span className="text-white">{`${runner.firstName} ${runner.lastName} (${totalLaps} rondjes)`}</span>
              </div>
              <button
                onClick={() => onDelete(i)}
                className="p-2 hover:bg-red-600 rounded-md transition-colors text-white"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
