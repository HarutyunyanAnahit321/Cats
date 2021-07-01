import axios from 'axios';
import { API_ENDPOINTS } from './endpoints';
const instance = axios.create({baseURL : 'https://api.thecatapi.com/v1' });

export function getCategories() {
  return instance.get(API_ENDPOINTS.categories);
};

export function getImages(limit, page, category_ids) {
  return instance.get(
    `${API_ENDPOINTS.images}/search?limit=${limit}&page=${page}&category_ids=${category_ids}`
  );
};