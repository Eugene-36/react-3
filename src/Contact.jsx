const Contact = ({ name, number, onDelete, contactId }) => {
  return (
    <div className="singleCard">
      <h3>Card</h3>
      <div className='buttonBlock'>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => onDelete(contactId)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
