import { useState, useEffect } from 'react';

const localCache = {};

export default function useQuoteList(quote) {
  const [quoteList, setQuoteList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!quote) {
      setQuoteList([]);
    } else if (localCache[quote]) {
      setQuoteList(localCache[quote]);
    } else {
      requestQuoteList();
    }

    async function requestQuoteList() {
      setQuoteList([]);
      setStatus('loading');

      const res = await fetch(`http://quotes-api.....`);
      const json = await res.json();

      localCache[quote] = json.quotes;

      setQuoteList(localCache[quote]);
      setStatus('loaded');
    }
  }, [quote]);

  return [quoteList, status];
}
