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
import { FiUserMinus } from 'react-icons/fi';

export const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Box borderWidth="2px" borderRadius="lg" mt={4} p={2}>
      {/* <Flex justifyContent="space-between"> */}
      <Box borderRadius="lg">
        {<EditableInputElementFormik id={id} name="name" value={name} />}
        {<EditableInputElementFormik id={id} name="number" value={number} />}
      </Box>
      <Button type="button" onClick={handleDelete} width={'100%'}>
        {<FiUserMinus />}
      </Button>
      {/* </Flex> */}
    </Box>
  );
};
