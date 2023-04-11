import { useEffect
  // , useMemo 
} from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import NoContacts from '../components/NoContacts';
import { getContacts } from 'redux/contactsOperations';
import Loader from './Loader/Loader';
import { selectContacts, selectIsLoading, selectIsContactsExist, selectFilteredContacts } from 'redux/selectors';


const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isContacts = useSelector(selectIsContactsExist);

  const filteredContacts = useSelector(selectFilteredContacts)


  useEffect(() => {
    !isContacts && dispatch(getContacts());
  }, [isContacts, dispatch]);

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
