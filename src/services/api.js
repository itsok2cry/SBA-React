const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getAllAnime() {
  const url = 'https://kitsu.io/api/edge/anime';
  return fetchData(url);
}