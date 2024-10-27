import Contact from './Contact.jsx';
const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
