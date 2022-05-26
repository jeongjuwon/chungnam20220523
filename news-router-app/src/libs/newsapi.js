import axios from 'axios';

const apiKey = 'e40c9540da594621a4e0e3349a197c63';

export async function getNewsList(keyword) {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
  return response.data.articles;
}

export async function getHeadlineList(keyword) {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
    return response.data.articles;
}
