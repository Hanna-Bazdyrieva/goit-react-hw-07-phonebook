import axios from 'axios';

axios.defaults.baseURL = 'https://643537f5537112453fd08499.mockapi.io';

export const getContactsApi = () => {
  return axios
    .get('/contacts', {
      headers: { 'content-type': 'application/json' },
    })
    .then(({ data }) => data);
};

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => ({ ...contact, id: data.id }));
 
};

export const removeContactApi = (id)=>{
    return axios.delete(`/contacts/${id}`).then(()=>id)
}
