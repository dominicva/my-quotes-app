import { useState } from 'react';

const AuthorInput = function () {
  const [author, setAuthor] = useState('Hamlet');
  return (
    <label htmlFor="quote__author-input">
      Author
      <input
        onChange={(e) => setAuthor(e.target.value)}
        onBlur={(e) => setAuthor(e.target.value)}
        rows="4"
        id="quote__author-input"
        type="text"
        value={author}
        placeholder="Hamlet"
      />
    </label>
  );
};

export default AuthorInput;
