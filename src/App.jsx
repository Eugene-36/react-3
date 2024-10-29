import { useState, useEffect } from 'react';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contact');
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addTask = (newTask) => {
    setContacts((prevState) => {
      return [...prevState, newTask];
    });
  };

  const deleteTask = (id) => {
    setContacts(() => {
      return contacts.filter((el) => el.id !== id);
    });
  };
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <section>
          <ContactForm onAdd={addTask} />
        </section>
        <section>
          <SearchBox search={search} onSearch={setSearch} />
        </section>
        <section>
          <ContactList contacts={visibleTasks} onDelete={deleteTask} />
        </section>
      </div>
    </>
  );
}

export default App;
