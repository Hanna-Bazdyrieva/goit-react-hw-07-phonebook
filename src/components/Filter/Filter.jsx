import { Box } from 'components/Box/Box';
import { Input, Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Box as="ul" mx="auto" my={2} px={6} py={4} bg="list" borderRadius="10px">
      <Title>Find contacts by name</Title>
      <Input
        name="text"
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
        placeholder="Enter something..."
      />
    </Box>
  );
};

export default Filter;
