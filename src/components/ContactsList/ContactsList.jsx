import { selectAllContacts, selectIsLoading } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { ContactCard } from 'components/ContactCard';
import { useEffect } from 'react';
import { useAuthState } from 'hooks';
import { getAllContacts } from 'redux/contacts';
import { Box, Center, Heading, Progress } from '@chakra-ui/react';

export const ContactsList = () => {
  const allContacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuthState();
  const {
    user: { name },
  } = useAuthState();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllContacts());
    }
  }, [dispatch, isLoggedIn]);

  // console.log(allContacts);

  return (
    <Box>
      <Center>
        <Heading as={'h2'} size={'md'}>
          Contacts list for {name}
        </Heading>
      </Center>
      {isLoading ? (
        <Progress size="xs" isIndeterminate />
      ) : (
        <Box as="ul" style={{ listStyle: 'none' }}>
          {allContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <ContactCard id={id} name={name} number={number} />
              </li>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
