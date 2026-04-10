import { useEffect, useState } from "react";

export function useFetch(url: string, id: number) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${url}${id}`)
      .then((res) => {
        return res.json();
      })
      .then((character) => {
        setData(character);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url, id]);

  return { data, loading, error };
}

export default useFetch;
