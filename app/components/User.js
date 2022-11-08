import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {colors} from '../utils/theme';
import {deviceRelativeWidth, scaledSize} from '../utils';

const User = ({item, markAsFav, removeFromFav, isFav}) => {
  const date = new Date(item.dob.date);
  return (
    <View style={styles.UserWrapper}>
      <View style={styles.ImageWrapper}>
        <Image
          style={styles.imageCircle}
          source={{
            uri: item?.picture?.medium,
          }}
        />
      </View>
      <View style={styles.DetailsWrapper}>
        <Text
          style={styles.title}>{`${item.name.first} ${item.name.last}`}</Text>
        <View style={styles.addressWrapper}>
          <Icon
            name="location-pin"
            type="material"
            color={colors.gray}
            size={scaledSize(15)}
          />
          <Text
            style={
              styles.subTitle
            }>{`${item.location.city}, ${item.location.country}`}</Text>
        </View>
        <Text style={styles.subTitle}>
          {`Date of Birth: ${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `}
        </Text>
      </View>
      <View style={styles.favouriteWrapper}>
        <TouchableOpacity
          onPress={() => {
            isFav ? removeFromFav(item) : markAsFav(item);
          }}>
          <Icon
            name={isFav ? 'star-fill' : 'star'}
            type="octicon"
            color={colors.primary}
            size={scaledSize(18)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserWrapper: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginLeft: deviceRelativeWidth(7.5),
    marginRight: deviceRelativeWidth(2.5),
    marginVertical: 7,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCircle: {
    height: scaledSize(60),
    width: scaledSize(60),
    resizeMode: 'contain',
    borderRadius: scaledSize(30),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ImageWrapper: {
    position: 'absolute',
    left: scaledSize(-20),
  },
  DetailsWrapper: {
    marginLeft: deviceRelativeWidth(15),
    flex: 1,
  },
  addressWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textBlack,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray,
  },
  favouriteWrapper: {
    paddingRight: 20,
    paddingLeft: 20,
    alignSelf: 'flex-start',
  },
});
export default User;
