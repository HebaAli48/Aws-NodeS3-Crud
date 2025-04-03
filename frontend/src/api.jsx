import axios from "axios";

const API_URL = "http://localhost:5000/posts";

export const uploadPost = async (formData) => {
  return axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const fetchPosts = async () => {
  return axios.get(API_URL);
};
