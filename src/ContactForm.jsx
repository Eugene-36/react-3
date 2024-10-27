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
        <input type='text' name='number' />
        <input type='text' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
