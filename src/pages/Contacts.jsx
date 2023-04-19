import { ContactsList } from 'components/ContactsList';
import { Editor } from 'components/Editor';
import { useAuthState } from 'hooks';

export const Contacts = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <>
      <h2>Contacts</h2>
      {/* <Editor /> */}
      {isLoggedIn && <ContactsList />}
    </>
  );
};
