import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
    const id = nanoid();
    return (
            <ul>
            {contacts.map(contact => (
            <li id={id} key={id}>{contact.name}: {contact.number}
            </li>
            ))}
            </ul>
    )
};