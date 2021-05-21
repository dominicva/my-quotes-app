import { useState, useEffect } from 'react';
import Quote from '../Quote';

const QuotesList = () => {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    getAllQuotes();
  }, []);

  const getAllQuotes = async () => {
    const url = 'http://localhost:3000/all';

    const quotes = await fetch(url).then((res) => res.json());

    setQuotesList(quotes);
  };

  return (
    <div>
      {quotesList.map((quote) => (
        <Quote
          quote={quote.quote}
          author={quote.author}
          key={`${quote.quote}-${quote.author}`}
        />
      ))}
      {/* <Quote quote="Invest in yourself" author="Scott Moss" />
      <Quote quote="May the Force be with you" author="Master Yoda" /> */}
    </div>
  );
};

export default QuotesList;
