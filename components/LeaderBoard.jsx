export default function LeaderBoard({ runners }) {
  // Combine duplicate runners and sum their laps
  const uniqueRunners = runners.reduce((acc, runner) => {
    const existingRunner = acc.find(
      (r) => r.firstName === runner.firstName && r.lastName === runner.lastName
    );

    if (existingRunner) {
      // Update existing runner's laps by adding current runner's laps
      existingRunner.laps += runner.laps;
      return acc;
    }

    // Add new runner to accumulator
    return [...acc, { ...runner }];
  }, []);

  // Sort by laps (highest first)
  const sortedRunners = uniqueRunners.sort((a, b) => b.laps - a.laps);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <div
        className="shadow rounded p-4"
        style={{ backgroundColor: "#8e8e8e" }}
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2 text-white">Naam</th>
              <th className="text-right py-2 text-white">Rondjes</th>
            </tr>
          </thead>
          <tbody>
            {sortedRunners.map((runner, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2 text-white">{`${runner.firstName} ${runner.lastName}`}</td>
                <td className="text-right py-2 text-white">{runner.laps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
