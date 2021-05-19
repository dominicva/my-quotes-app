import { useState, useEffect } from 'react';
import Form from './Form';
import Quote from './Quote';

const CreateQuoteControl = () => {
  const [quotePreview, setQuotePreview] = useState('Invest in yourself');
  const [authorPreview, setAuthorPreview] = useState('Scott Moss');

  useEffect(() => {});
  return (
    <div>
      <Form />
      <Quote text={quotePreview} author={authorPreview} />
    </div>
  );
};

export default CreateQuoteControl;
