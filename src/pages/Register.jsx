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
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { regValidationSchema } from 'options';

const Register = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    name: 'alex',
    password: '123123123',
    email: 'alex@mail.com',
  };

  const handleSubmit = (valuesFormik, actionsFormik) => {
    // console.log('Handle Submit!', valuesFormik);
    dispatch(
      registerUser({
        name: valuesFormik.name,
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
      // validationSchema={regValidationSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form autoComplete="off">
          <Stack spacing={30}>
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
                    {...field}
                    type="text"
                    placeholder="Input name"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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

            <Button type="submit">Sign Up</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
