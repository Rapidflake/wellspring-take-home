import { useEffect, useState } from "react";

const useFetch = (url, endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const tempUrl = url + "/" + endpoint;

  const FetchData = async (url) => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error("Can't fetch data from " + url);
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData(tempUrl);
  }, [tempUrl]);

  return { data, error, isLoading };
};

export default useFetch;
