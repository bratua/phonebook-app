import { ContactsList } from 'components/ContactsList';
import { Editor } from 'components/Editor';
import { useAuthState } from 'hooks';

const Contacts = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <>
      <h2>Contacts</h2>
      <Editor />
      {isLoggedIn && <ContactsList />}
    </>
  );
};

export default Contacts;
