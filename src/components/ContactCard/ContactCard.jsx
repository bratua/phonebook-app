import {
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
import {
  EditableInputElement,
  EditableInputElementFormik,
} from 'components/EditableInputElement';

export const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      {/* {<EditableInputElement id={id} name="name" value={name} />}:
      {<EditableInputElement id={id} name="number" value={number} />} */}
      {<EditableInputElementFormik id={id} name="name" value={name} />}
      {/* {<EditableInputElementFormik id={id} name="number" value={number} />} */}
      <Button isDisabled type="button" onClick={handleDelete}>
        DELETE
      </Button>
    </div>
  );
};
