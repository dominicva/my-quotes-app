const Quote = (props) => {
  return (
    <figure className="quote">
      <blockquote>{props.text}</blockquote>
      <figcaption>
        <cite>{props.author}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;
