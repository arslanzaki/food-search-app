import axios from "axios";

export default axios.create({
  baseURL:
    " https://api.edamam.com/api/food-database/v2/parser?app_id=e313b43a",
  headers: {
    Authorization: "Bearer f99d0e02b3bd9c1755abdc4ce461db99",
  },
});
