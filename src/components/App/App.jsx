import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { customAlphabet } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';

const nanoid = customAlphabet('1234567890abcdef', 10);
export const LS_KEYS = {
  contacts: 'contacts',
};

import React from 'react';

const App = () => {
  return <div>App</div>;
};

export default App;

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contactsFromLS = JSON.parse(localStorage.getItem(LS_KEYS.contacts));
//     if (contactsFromLS) {
//       this.setState({
//         contacts: contactsFromLS,
//       });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem(LS_KEYS.contacts, JSON.stringify(contacts));
//     }
//   }

//   handleAddedContact = formData => {
//     const { contacts } = this.state;

//     const hasDuplicates = contacts.some(
//       ({ name, number }) =>
//         name.toLowerCase() === formData.name.toLowerCase() &&
//         number === formData.number
//     );
//     if (hasDuplicates) {
//       alert(`Contact ${formData.name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       ...formData,
//       id: nanoid(5),
//     };
//     this.setState(({ contacts }) => {
//       return { contacts: [...contacts, newContact] };
//     });
//   };

//   handleFilterChange = e => {
//     const filterValue = e.currentTarget.value;
//     this.setState({ filter: filterValue });
//   };

//   handleDeleteBtnClick = contactId => {
//     this.setState(({ contacts }) => {
//       return {
//         contacts: contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };
//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.trim().toLowerCase())
//     );

//     return (
//       <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.handleAddedContact} />
//         <h2 className={css.subtitle}>Contacts</h2>
//         <Filter value={filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           handleDeleteBtnClick={this.handleDeleteBtnClick}
//         />
//       </div>
//     );
//   }
// }
