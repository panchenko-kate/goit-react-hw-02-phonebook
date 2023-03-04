import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data)
    this.setState(prevState => {
      return {
      contacts: [...prevState.contacts, {...data},],
    }})
  };


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList 
        contacts={this.state.contacts} />
      </div>
    )
  }
}