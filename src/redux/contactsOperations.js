import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from 'services/mockAPI';
import {
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contactSlice';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  getContactsApi()
    .then(data => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error.message)));
};

export const addContact = newContact => dispatch => {
  dispatch(addContactRequest());

  addContactApi(newContact)
    .then(contact => dispatch(addContactSuccess(contact)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  removeContactApi(id)
    .then(id => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error.message)));
};


// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact
