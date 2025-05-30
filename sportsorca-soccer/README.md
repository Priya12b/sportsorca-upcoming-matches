# Upcoming Soccer Matches - SportsOrca Internship Task

This is a simple React web application that displays a list of upcoming soccer matches (English Premier League) fetched from a free public API.

---

## Features

- Fetches upcoming soccer matches from the **API-Football** public API.
- Displays both teams and the scheduled date/time for each match.
- Shows loading state while fetching data.
- Responsive and clean UI using basic CSS.
- Fully functional frontend-only React app (backend is optional).

---

## API Details

- **API Used:** [API-Football](https://www.api-football.com/)
- **API Endpoint:** `https://v3.football.api-sports.io/fixtures`
- **League:** English Premier League (league ID 39)
- **Season:** 2023
- **API Documentation:** [https://www.api-football.com/documentation-v3](https://www.api-football.com/documentation-v3)

*Note: You need to obtain a free API key from API-Football and replace it in the code.*

---

## Project Setup

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

   git clone https://github.com/yourusername/upcoming-soccer-matches.git
   cd upcoming-soccer-matches

2. Install dependencies

    npm install
     or
    yarn install

3. API Key Handling

    The API key is stored directly inside the src/api.js file for simplicity.

    To keep your API key secure, the src/api.js file is included in .gitignore and not committed to the repository.

    When cloning the repo, you need to create your own src/api.js file with the following content and replace 'YOUR_API_KEY_HERE' with your actual API key:
    
    ```js
    import axios from 'axios';

    const API_KEY = 'YOUR_API_KEY_HERE';  // <-- Replace with your API key
    const BASE_URL = 'https://v3.football.api-sports.io';

    export const getUpcomingMatches = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fixtures`, {
        params: {
            league: 39,
            season: 2023,
        },
        headers: {
            'x-apisports-key': API_KEY,
        },
        });
        return response.data.response;
    } catch (error) {
        console.error('API error:', error.message);
        return [];
    }
    };




4. Start the development server

    npm start
     or
    yarn start

5. Open http://localhost:3000 in your browser to see the app.

---

### Usage

   The app fetches upcoming Premier League matches and displays them.

   Each match shows the home team vs away team, and the scheduled date/time in your local timezone.


---

### Code Overview

    src/api.js: Contains the API call using Axios to fetch matches.
    
    src/App.js: Main React component that handles fetching and displaying the matches.

    src/index.js & src/index.css: React entry point and basic styling.

---

### Notes

    This app only uses frontend React to fetch and display data (optional backend not implemented).

    API calls are made directly from the client with the API key in headers.

    Ensure your API key is kept secure and do not expose it publicly in production.

--- 

#### Submission

    API URL used: https://v3.football.api-sports.io/fixtures

    GitHub Repository: https://github.com/yourusername/upcoming-soccer-matches

    Built for the Lead Full-Stack Developer Internship task at SportsOrca.

---

### License

    This project is licensed under the MIT License.

    Thank you for reviewing my submission.
    Looking forward to your feedback!

---
### Created by Priyanka