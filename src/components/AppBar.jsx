import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';

import Text from './Text';
import theme from '../theme';
import { AUTHORIZED_USER } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
    paddingHorizontal: 10,
    flexGrow: 0,
    flexShrink: 0
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

const SignOutTab = () => {
  const [signOut] = useSignOut();

  return (
    <Pressable onPress={signOut} style={styles.item}>
      <Text color={'title'} fontSize={'title'} fontWeight={'bold'}>Sign Out</Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab to='/' label='Repositories' />
      {
        data && data.authorizedUser
          ? <SignOutTab />
          : <AppBarTab to='/signin' label='Sign In' />
      }
    </ScrollView>
  );
};

export default AppBar;
