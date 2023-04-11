import { Box } from 'components/Box/Box';
import { Title } from './NoContacts.styled';

const NoContacts = ({ message }) => {
  return (
    <Box
      as="div"
      mx="auto"
      my={2}
      px={6}
      py={4}
      bg="warning"
      borderRadius="10px"
    >
      <Title>{message}</Title>
    </Box>
  );
};

export default NoContacts;
