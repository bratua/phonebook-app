import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
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
  Flex,
  Box,
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
import { FiUserPlus, FiUserX, FiUserMinus, FiThumbsUp } from 'react-icons/fi';
import { contactValidationSchema } from 'options';
import { addContact } from 'redux/contacts';

export const Editor = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (valuesFormik, actionsFormik) => {
    dispatch(
      addContact({
        name: valuesFormik.name,
        number: valuesFormik.number,
      })
    );

    actionsFormik.setSubmitting(false);
    actionsFormik.resetForm();
    onClose();
  };

  return (
    <Box mt={2} mb={2}>
      {
        <Button w={'100%'} bgColor={'green.200'} onClick={onOpen}>
          {<FiUserPlus />}
        </Button>
      }

      <Formik
        validationSchema={contactValidationSchema}
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
      >
        {props => (
          <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay minWidth={[320, null]} />
            <ModalContent
              maxWidth={[300, 400]}
              minWidth={270}
              mr={[3]}
              ml={[3]}
            >
              <ModalHeader>Add new contact</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Form autoComplete="off">
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Name</FormLabel>

                        <Input
                          variant="flushed"
                          size="lg"
                          errorBorderColor="red.300"
                          focusBorderColor="green.300"
                          {...field}
                          type="text"
                          placeholder="Input new contact name"
                        />

                        <FormErrorMessage>{'Invalid name'}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="number">
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.number && form.touched.number}
                      >
                        <FormLabel>Contact phone</FormLabel>
                        <Input
                          variant="flushed"
                          size="lg"
                          errorBorderColor="red.300"
                          focusBorderColor="green.300"
                          {...field}
                          type="text"
                          placeholder="Input contact number"
                        />
                        <FormErrorMessage>{'Invalid number'}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button mt={4} w={'100%'} type="submit">
                    {<FiThumbsUp />}
                  </Button>
                </Form>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Formik>
    </Box>
  );
};
