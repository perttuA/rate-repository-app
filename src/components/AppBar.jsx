import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
    paddingHorizontal: 10,
    flexGrow: 0,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});

const AppBarTab = ({ to, label }) => {
  return (
    <Link to={to} style={styles.item}>
      <Text color={'title'} fontSize={'title'} fontWeight={'bold'}>{label}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab to='/' label='Repositories' />
      <AppBarTab to='/signin' label='Sign In' />
    </ScrollView>
  );
};

export default AppBar;
