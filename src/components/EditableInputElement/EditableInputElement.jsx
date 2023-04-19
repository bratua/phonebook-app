import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  IconButton,
  ButtonGroup,
  Flex,
  Input,
  useEditableControls,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts';

export const EditableInputElement = ({ name, id, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();
  const handleInputChange = event => setInputValue(event.target.value);
  const onUpdate = () => {
    dispatch(updateContact({ id, body: { [name]: inputValue } }));
  };

  //   console.log('props', contact);
  //   console.log('inputValue', inputValue);

  /* Control buttons for input element */
  const ControlButtons = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    console.log('isEditing', isEditing);

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="center"
      defaultValue={inputValue}
      fontSize="2xl"
      isPreviewFocusable={false}
      onSubmit={onUpdate}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} onChange={handleInputChange} />
      <ControlButtons />
    </Editable>
  );
};
