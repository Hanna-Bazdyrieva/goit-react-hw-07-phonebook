import { Box } from 'components/Box/Box';
import ContactListItem from 'components/ContactListItem';
import NoContacts from 'components/NoContacts/NoContacts';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <>
      {contacts.length === 0 && <NoContacts message="No contacts found" />}
      {contacts.length !== 0 && (
        <Box
          as="ul"
          mx="auto"
          my={2}
          px={6}
          py={4}
          bg="list"
          borderRadius="20px"
        >
          {contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </Box>
      )}
    </>
  );
};

export default memo(ContactList);
