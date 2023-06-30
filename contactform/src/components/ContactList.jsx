/* eslint-disable react/prop-types */
import { useState } from 'react';

function ContactList({ contacts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchContacts = () => {
    const searchRegex = new RegExp(searchTerm, 'i');
    const filteredContacts = contacts.filter((contact) =>
      searchRegex.test(contact.name)
    );
    return filteredContacts;
  };

  const filteredContacts = searchContacts();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{ display: 'flex', alignItems: 'center',marginTop:'40px' }}>
          <label>Search: </label>
          <input type="text" id="search" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} style={{ marginLeft: '10px', width: '300px',border:'none',backgroundColor:'#DDF7E3' }} />
        </div>
      </div>
      <table style={{ borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid black', padding: '10px', width: '33%' }}>Name</th>
            <th style={{ borderBottom: '1px solid black', padding: '10px', width: '33%' }}>Number</th>
            <th style={{ borderBottom: '1px solid black', padding: '10px', width: '33%' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.email}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{contact.name}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{contact.number}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;

