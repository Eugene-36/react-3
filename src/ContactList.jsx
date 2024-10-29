import Contact from './Contact.jsx';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          contactId={id}
        />
      ))}
    </div>
  );
};

export default ContactList;
