import axios from "axios";

// you SHOULD replace this apiKey
// see http://www.omdbapi.com/apikey.aspx
const apiKey = "86418ab1";

const omdbBaseUrl = "https://www.omdbapi.com/";
const baseQuery = `?i=tt3896198&apikey=${apiKey}`;
const logging = false;

const apiClient = axios.create({
  baseURL: omdbBaseUrl,
  timeout: 0,
  responseType: "json",
});

apiClient.interceptors.request.use((v) => {
  if (logging) console.log(JSON.stringify(v));
  return v;
});

apiClient.interceptors.response.use((v) => {
  if (logging) console.log(JSON.stringify(v));
  return v;
});

export default apiClient;
export { baseQuery };
