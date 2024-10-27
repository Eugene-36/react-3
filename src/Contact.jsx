const Contact = ({ name, number }) => {
  return (
    <div>
      <h3>Card</h3>
      <span>{name}</span>-<span>{number}</span>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
