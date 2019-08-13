import { useState } from 'react';

export function useImmutableHash(initialHash = {}) {
  const [hash, setHash] = useState(initialHash);

  return [
    hash,
    diff => {
      setHash({
        ...hash,
        ...diff,
      });
    },
    setHash,
  ];
}
