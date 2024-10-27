import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [search, setSearch] = useState('');

  const addTask = (newTask) => {
    setContacts((prevState) => {
      return [...prevState, newTask];
    });
  };

  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addTask} />
        <SearchBox search={search} onSearch={setSearch} />
        <ContactList contacts={visibleTasks} />
      </div>
    </>
  );
}

export default App;
