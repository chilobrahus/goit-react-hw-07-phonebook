import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactExists = contacts.find(contact => {
      return contact.name === name || contact.number === number;
    });
    if (contactExists) {
      Report.info(
                '',
                `Contact with name ${name} and number ${number} already exists`,
                'Okay'
              )
        return
    };
    dispatch(addContact({name, number, id: nanoid()}));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              className="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </div>
    );
  }