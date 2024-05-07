import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addListener(listener); // Escucha los cambios de la media query
    setMatches(media.matches);

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
