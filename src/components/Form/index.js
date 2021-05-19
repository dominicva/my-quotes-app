import QuoteInput from './QuoteInput';
import AuthorInput from './AuthorInput';
import SelectCategory from './SelectCategory';

const Form = function () {
  return (
    <div className="create-quote">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`http://localhost:3000/create-quote`, {
            method: 'POST',
          });
        }}
        className="create-quote__form"
      >
        <QuoteInput />
        <AuthorInput />
        <SelectCategory />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
