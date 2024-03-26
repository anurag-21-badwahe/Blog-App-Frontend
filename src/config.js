const BASE_URL_DEV = "http://localhost:8000/"
const BASE_URL_PROD = "https://being-dev.onrender.com/"
export const BASE_URL =
  import.meta.env.MODE === "development" ? BASE_URL_DEV : BASE_URL_PROD;