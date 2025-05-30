import axios from 'axios';

const API_KEY = 'af0008ad49e42265b2b06100637a9ec5';  // <-- Replace here
const BASE_URL = 'https://v3.football.api-sports.io';

export const getUpcomingMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fixtures`, {
      params: {
        league: 39,    // Premier League
        season: 2023,  // Current or next season
        // next: 10,      // Next 10 matches
      },
      headers: {
        'x-apisports-key': API_KEY,
      },
    });

    console.log("API response data:", response.data);
    return response.data.response;  // array of matches
  } catch (error) {
    console.error('API error:', error.message);
    return [];
  }
};
