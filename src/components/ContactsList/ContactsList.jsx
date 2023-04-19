import { selectAllContacts, selectIsLoading } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { ContactCard } from 'components/ContactCard';
import { useEffect } from 'react';
import { useAuthState } from 'hooks';
import { getAllContacts } from 'redux/contacts';

export const ContactsList = () => {
  const allContacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuthState();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllContacts());
    }
  }, [dispatch, isLoggedIn]);

  // console.log(allContacts);

  return (
    <>
      <p>Contact List!</p>
      {isLoading ? (
        'Loading contacts....'
      ) : (
        <ol>
          {allContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <ContactCard id={id} name={name} number={number} />;
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};
