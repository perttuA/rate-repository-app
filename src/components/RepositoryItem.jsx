import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'stretch',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  infoContainer: {
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 4,
    marginBottom: 10,
  },
  infoItemContainer: {
    paddingBottom: 5,
  },
  footerItem: {
    flexGrow: 0,
    alignItems: 'center'
  }
});

const RepositoryItemHeader = ({ avatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItemContainer}>
          <Text fontWeight={'bold'} fontSize={'subheading'}>{fullName}</Text>
        </View>
        <View style={styles.infoItemContainer}>
          <Text color={'secondary'}>{description}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text color={'title'}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryItemFooter = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerItem}>
        <Text fontWeight={'bold'}>{stars}</Text>
        <Text color={'secondary'}>Stars</Text>
      </View>
      <View style={styles.footerItem}>
        <Text fontWeight={'bold'}>{forks}</Text>
        <Text color={'secondary'}>Forks</Text>
      </View>
      <View style={styles.footerItem}>
        <Text fontWeight={'bold'}>{reviews}</Text>
        <Text color={'secondary'}>Reviews</Text>
      </View>
      <View style={styles.footerItem}>
        <Text fontWeight={'bold'}>{rating}</Text>
        <Text color={'secondary'}>Rating</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  const roundedStars = item.stargazersCount >= 1000
    ? `${Math.round(item.stargazersCount / 100) / 10}k`
    : `${item.stargazersCount}`;

  const roundedForks = item.forksCount >= 1000
    ? `${Math.round(item.forksCount / 100) / 10}k`
    : `${item.forksCount}`;

  const roundedReviews = item.reviewCount >= 1000
    ? `${Math.round(item.reviewCount / 100) / 10}k`
    : `${item.reviewCount}`;

  const roundedRating = item.ratingAverage >= 1000
    ? `${Math.round(item.ratingAverage / 100) / 10}k`
    : `${item.ratingAverage}`;

  return (
    <View style={styles.container}>
      <RepositoryItemHeader
        avatarUrl={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />

      <RepositoryItemFooter
        stars={roundedStars}
        forks={roundedForks}
        reviews={roundedReviews}
        rating={roundedRating}
      />
    </View>
  );
};

export default RepositoryItem;