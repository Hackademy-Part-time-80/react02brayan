import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    if (!url) return;

    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };

    getData();
  }, [url]);

  return data;
}