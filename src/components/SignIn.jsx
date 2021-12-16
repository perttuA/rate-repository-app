import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: 'white'
  },
  submitButton: {
    padding: 20,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: theme.colors.textTitle,
  }
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight={'bold'} color={'title'} fontSize={'subheading'}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
