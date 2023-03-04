import { Component } from 'react';
import { Div, Label, Btn, Input } from './ContactForm.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ 
      [name]:  value});
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);
        // const { name, contacts } = this.state;
        // const newContact = { name };
        // this.setState({ contacts: [...contacts, newContact], name: '' });

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: ''});
    };
    
    render() {
    return (
        <Div>
            <form onSubmit={this.handleSubmit}>
            <Label>
                Name
                    <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleInputChange}
                />
            </Label>
            <Label>
                Number
                    <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}
                />
            </Label>
            <Btn type="submit">Add contact</Btn>
            </form>
        </Div>
    )
    }
}