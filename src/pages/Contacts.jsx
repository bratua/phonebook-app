import { ContactsList } from 'components/ContactsList';
import { useAddContactMutation } from 'redux/contactSlice';

export const Contacts = () => {
  const [addContact, result] = useAddContactMutation();

  const handleAddContact = () => {};

  return (
    <>
      <h2>Contacts</h2>
      {/* 
      <ContactsList /> */}
    </>
  );
};
