import { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList'; 

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div style={{padding:'50px 100px',border:'2px solid #FCAEAE',backgroundColor:'#FFEADD'}}>
      <AddContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;