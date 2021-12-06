import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.textSecondary,
    color: theme.colors.textSecondary
  },
  errorBorderColor: {
    borderColor: 'red'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    error && styles.errorBorderColor,
    style
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;