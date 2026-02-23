import { useState, useEffect } from 'react';

const usePreloader = (minDuration = 1500) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  return loading;
};

export default usePreloader;