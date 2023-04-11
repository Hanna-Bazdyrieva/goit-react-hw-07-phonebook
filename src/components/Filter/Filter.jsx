import { Box } from 'components/Box/Box';
import { Input, Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';




const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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
