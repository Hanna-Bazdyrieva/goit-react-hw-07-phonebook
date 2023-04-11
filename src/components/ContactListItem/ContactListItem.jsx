import {
  Item,
  ItemData,
  DeleteBtn,
  ItemNumber,
} from './ContactListItem.styled';
import { BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsOperations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <BsPersonCircle />
      <ItemData>{name}</ItemData>
      <ItemNumber>{number}</ItemNumber>
      <DeleteBtn
        onClick={e => {
          console.log(id);
          return dispatch(removeContact(id));
        }}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
