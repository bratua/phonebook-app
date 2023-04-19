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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  useBoolean,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts';
import { contactValidationSchema } from 'options';
import { clearConfigCache } from 'prettier';

export const EditableInputElementFormik = ({ name, id, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isInputError, setIsInputError] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = value => {
    setInputValue(value);
    console.log('value', value);
  };

  const handleInputCancel = prev => {
    setInputValue(prev);
  };

  const onUpdate = () => {
    // console.log('SUBMITTING');
    dispatch(updateContact({ id, body: { [name]: inputValue } }));
  };

  //   console.log('props', name, id, value);
  // console.log('isInputError', isInputError);
  // console.log('Editable', Editable);
  /* Control buttons for input element */

  const ControlButtons = ({ isInputError, isInputActive }) => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    // console.log(getEditButtonProps());
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
          isDisabled={isInputError}
        />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <Formik
      validationSchema={contactValidationSchema}
      initialValues={{ [name]: inputValue }}
      // onSubmit={onUpdate}
    >
      {props => {
        return (
          <Form autoComplete="off">
            <Field
              name={name}
              // onChange={() => {
              //   props.validateField(name);
              // }}
            >
              {({ field, form, meta }) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={form.errors[name] && form.touched[name]}
                  >
                    <FormLabel>{name}</FormLabel>

                    <Editable
                      textAlign="center"
                      // defaultValue={props.values[name]}
                      defaultValue={inputValue}
                      fontSize="2xl"
                      isPreviewFocusable={false}
                      selectAllOnFocus={true}
                      submitOnBlur={false}
                      onSubmit={
                        form.touched[name] && !form.errors[name] && onUpdate
                      }
                      onChange={handleInputChange}
                    >
                      <EditablePreview />
                      <Input as={EditableInput} {...field} />
                      <FormErrorMessage>{`Invalid ${meta.error}`}</FormErrorMessage>
                      <ControlButtons
                        isInputError={form.errors[name]}
                        isInputActive={form.touched[name]}
                      />
                    </Editable>
                  </FormControl>
                );
              }}
            </Field>
          </Form>
        );
      }}
    </Formik>
  );
};
