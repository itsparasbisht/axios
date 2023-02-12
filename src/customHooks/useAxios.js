import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosCient";

const useAxios = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axiosClient[method](url, body)
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body]);

  return { response, error, loading };
};

export default useAxios;
