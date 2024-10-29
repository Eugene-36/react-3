const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      number: e.target.elements.number.value,
      name: e.target.elements.name.value,
    });
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input type='text' name='number' placeholder='Write your number' />
          <input type='text' name='name' placeholder='Write your name' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
