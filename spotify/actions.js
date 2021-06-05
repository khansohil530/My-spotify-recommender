const axios = require("axios")

const BASE_URL = "https://api.spotify.com/v1"

// uses Spotify's Search API to search tracks by track name and artist
const searchTracks = ({ track, artist }) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/search?q=track:${track}+artist:${artist}&type=track`,
  };

  return axios(config)
    .then((res) => res.data)
}

/// uses Spotify's Search API to search tracks by track name and artist
const getRecommendations = ({ trackId }) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/recommendations?seed_tracks=${trackId}`,
  };

  return axios(config)
    .then((res) => res.data);
}

module.exports = { searchTracks, getRecommendations }