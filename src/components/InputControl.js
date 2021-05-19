import { useState } from 'react';

const CATEGORIES = ['philosophy', 'science', 'contemplation'];

export default function InputControl({ id, labelText, inputType }) {
  const [content, setContent] = useState('');

  if (inputType === 'textarea') {
    return (
      <label htmlFor={id}>
        {labelText}
        <textarea
          onChange={(e) => setContent(e.target.value)}
          onBlur={(e) => setContent(e.target.value)}
          rows="4"
          id={id}
          type="text"
          value={content}
          placeholder="To be, or not to be, that is the question."
        />
      </label>
    );
  } else if (inputType === 'dropdown') {
    return (
      <label htmlFor={id}>
        {labelText}
        <select
          onChange={(e) => setContent(e.target.value)}
          onBlur={(e) => setContent(e.target.value)}
          id={id}
          value={content}
        >
          <option />
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    );
  } else {
    return (
      <label htmlFor={id}>
        {labelText}
        <input
          onChange={(e) => setContent(e.target.value)}
          onBlur={(e) => setContent(e.target.value)}
          rows="4"
          id={id}
          type="text"
          value={content}
          placeholder="Hamlet"
        />
      </label>
    );
  }
}
