import { useEffect, useMemo } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsItems,
  getIsLoading,
  isContactsExist,
} from '../redux/contactSlice';
import NoContacts from '../components/NoContacts';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsOperations';
import Loader from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const isContacts = useSelector(isContactsExist);

  useEffect(() => {
    !isContacts && dispatch(getContacts());
  }, [isContacts, dispatch]);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  return (
    <Section>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <Loader />}
        {contacts.length !== 0 && (
          <>
            <Filter />
            <ContactList contacts={filteredContacts} />
          </>
        )}
        {contacts.length === 0 && !isLoading && (
          <NoContacts message="You have no contacts so far..." />
        )}
      </Section>
    </Section>
  );
};

export default App;
