import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

axiosClient.defaults.timeout = 2000;

axios.defaults.withCredentials = true;

export default axiosClient;
