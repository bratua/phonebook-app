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
import { Field, Form, Formik } from 'formik';
import { registrationValidateSchema } from 'options';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: 'serg123serg@mail.com',
    password: '123qwe123',
  };

  const handleSubmit = (valuesFormik, actionsFormik) => {
    // console.log('Handle Submit!', valuesFormik);
    dispatch(
      logInUser({
        email: valuesFormik.email,
        password: valuesFormik.password,
      })
    );
    actionsFormik.setSubmitting(false);
    // actionsFormik.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      // validationSchema={registrationValidateSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form autoComplete="off">
          <Stack spacing={30}>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    variant="flushed"
                    size="lg"
                    errorBorderColor="red.300"
                    {...field}
                    type="email"
                    placeholder="Input e-mail"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    variant="flushed"
                    size="lg"
                    errorBorderColor="red.300"
                    {...field}
                    type="text"
                    placeholder="Input password"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button type="submit">Log In</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
