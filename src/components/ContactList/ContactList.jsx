import { Btn } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDelete }) => {
    return (
            <ul>
            {filteredContacts().map(contact => (
            <li key={contact.name}>{contact.name}: {contact.number}
            <Btn type="button" onClick = {()=>{onDelete(contact.name)}}>Delete</Btn>
            </li>
            ))}
            </ul>
    )
};