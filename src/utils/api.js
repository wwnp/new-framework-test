import { API_UNSPLASH } from "./config";

export const mainUrl = 'https://test-front.framework.team/'

export const mainUrlUnsplash = 'https://api.unsplash.com/photos/'

export const apiFetch = async (str) => {
  const response = await fetch(`${mainUrl}${str}`)
  let json = await response.json()
  return json
};
export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

export const apiFetchUnsplash = async () => {
  const response = await fetch(`${mainUrlUnsplash}?client_id=${API_UNSPLASH}&per_page=30`)
  let json = await response.json()
  return json
};