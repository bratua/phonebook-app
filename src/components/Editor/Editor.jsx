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
} from '@chakra-ui/react';
import { contactValidationSchema } from 'options';
import { addContact } from 'redux/contacts';

export const Editor = () => {
  const dispatch = useDispatch();
  const handleSubmit = (valuesFormik, actionsFormik) => {
    dispatch(
      addContact({
        name: valuesFormik.name,
        number: valuesFormik.number,
      })
    );

    actionsFormik.setSubmitting(false);
    // actionsFormik.resetForm();
  };

  return (
    <>
      <p>Editor</p>
      <Formik
        validationSchema={contactValidationSchema}
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
      >
        {props => (
          <Form autoComplete="off">
            <p>Formik form</p>

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

            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
