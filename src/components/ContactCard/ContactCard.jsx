import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import { EditableInputElementFormik } from 'components/EditableInputElement';

export const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Box borderWidth="4px" borderRadius="lg" mb="10px">
      {/* <Flex justifyContent="space-between"> */}
      <Box borderRadius="lg">
        {<EditableInputElementFormik id={id} name="name" value={name} />}
        {<EditableInputElementFormik id={id} name="number" value={number} />}
      </Box>
      <Button colorScheme="blue" type="button" onClick={handleDelete}>
        DELETE
      </Button>
      {/* </Flex> */}
    </Box>
  );
};
