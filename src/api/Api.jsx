import axios from "axios";
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchTodos = () => {
  return api.get("/todos");
};
