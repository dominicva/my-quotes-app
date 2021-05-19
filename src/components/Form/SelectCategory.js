import { useState } from 'react';

const CATEGORIES = ['philosophy', 'science', 'contemplation'];

const SelectCategory = function () {
  const [category, setCategory] = useState('');

  return (
    <label htmlFor="category">
      Category
      <select
        onChange={(e) => setCategory(e.target.value)}
        onBlur={(e) => setCategory(e.target.value)}
        id="category"
        value={category}
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
};

export default SelectCategory;
