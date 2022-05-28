import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, {
        signal: abortCont.signal,
      })
        .then((res) => {
          if (res.ok === false) {
            throw Error('could not fetch data from that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            console.log(err.message);
            setLoading(false);
            setError(err.message);
          }
        });
    }, 500);
    return ()=> abortCont.abort();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
