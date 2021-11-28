import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/imdb`,
});

export const fetchBySearch = async (type, searchQuery, pageNumber) => {
  return api.get(
    `releases?type=${type}&searchQuery=${searchQuery}&page=${pageNumber}`
  );
};

export const fetchAll = async () => {
  return api.get(`releases?type=all`);
};

export const rateRelease = async (releaseId, rating) => {
  return api.post(`releases/${releaseId}/rate`, {
    rating: rating,
  });
};
