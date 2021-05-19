import { useState } from 'react';

const QuoteInput = function () {
  const [quote, setQuote] = useState(
    'To be, or not to be, that is the question.'
  );

  return (
    <label htmlFor="quote__text-area">
      Quote
      <textarea
        onChange={(e) => setQuote(e.target.value)}
        onBlur={(e) => setQuote(e.target.value)}
        rows="4"
        id="quote__text-area"
        type="text"
        value={quote}
        placeholder="Quote"
      />
    </label>
  );
};

export default QuoteInput;
