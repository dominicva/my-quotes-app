const Quote = (props) => {
  return (
    <figure className="quote">
      <blockquote>{props.quote}</blockquote>
      <figcaption>
        <cite>{props.author}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;
