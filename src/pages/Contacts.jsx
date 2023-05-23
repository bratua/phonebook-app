import { ContactsList } from 'components/ContactsList';
import { Editor } from 'components/Editor';
import { useAuthState } from 'hooks';
import {
  Flex,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

const Contacts = () => {
  const { isLoggedIn } = useAuthState();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Editor />
      {isLoggedIn && <ContactsList />}
    </Box>
  );
};

export default Contacts;
