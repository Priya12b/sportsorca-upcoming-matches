import React, { useEffect, useState } from 'react';
import { getUpcomingMatches } from './api';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getUpcomingMatches();
      console.log("Fetched Matches:", data);  // Debug
      setMatches(data);
      setLoading(false);
    };

    fetchMatches();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">⚽ Upcoming Soccer Matches</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading matches...</p>
      ) : matches.length === 0 ? (
        <p className="text-center text-red-500">No matches found or API failed.</p>
      ) : (
        <ul className="space-y-4">
          {matches.map((match) => (
            <li key={match.fixture.id} className="p-4 shadow rounded bg-white">
              <p className="text-xl font-semibold">
                {match.teams.home.name} vs {match.teams.away.name}
              </p>
              <p className="text-gray-600">
                {new Date(match.fixture.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
