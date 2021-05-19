import QuoteInput from './QuoteInput';
import AuthorInput from './AuthorInput';
import SelectCategory from './SelectCategory';

const Form = function () {
  return (
    <div className="create-quote">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // POST request to create new quote in api
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
