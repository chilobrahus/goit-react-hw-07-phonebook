import { Table } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Table>
      <tbody>
        {filteredContacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};