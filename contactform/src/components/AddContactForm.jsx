/* eslint-disable react/prop-types */
import { useState } from 'react';
import Name from './Name';
import Number from './Number';
import Email from './Email';

function AddContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !number || !email) {
      return; 
    }
    const newContact = { name, number, email };
    onAddContact(newContact);
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <Name value={name} onChange={(e) => setName(e.target.value)} />

      <Number value={number} onChange={(e) => setNumber(e.target.value)} />

      <Email value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="submit" style={{ marginLeft: '10px',background:'#FF9B9B',border:'none',borderRadius:'3px',width:'50px'}}>Add</button>
    </form>
  );
}

export default AddContactForm;