import * as React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {colors} from '../../utils/theme';

import {deviceRelativeWidth, scaledSize} from '../../utils';
import {Icon} from 'react-native-elements';

import {useSelector, useDispatch} from 'react-redux';
import {removeFromFavourite} from '../../redux/actions';

const FavouriteScreen = ({}) => {
  const favData = useSelector(state => state.favouriteItems);

  const dispatch = useDispatch();

  const removeFromFav = item => {
    dispatch(removeFromFavourite(item));
  };

  const renderItem = ({item}) => {
    return <FavouriteUser item={item} removeFromFav={removeFromFav} />;
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Header />
      <View>
        <FlatList
          data={favData}
          renderItem={renderItem}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const renderSeparator = () => <View style={styles.separator} />;

const FavouriteUser = ({item, removeFromFav}) => {
  return (
    <>
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
        </View>
        <View style={styles.favouriteWrapper}>
          <TouchableOpacity
            onPress={() => {
              removeFromFav(item);
            }}>
            <Icon
              name="star-fill"
              type="octicon"
              color={colors.primary}
              size={scaledSize(18)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.background,
    flex: 1,
  },
  UserWrapper: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: deviceRelativeWidth(2),
    paddingRight: deviceRelativeWidth(2),
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCircle: {
    height: scaledSize(40),
    width: scaledSize(40),
    resizeMode: 'contain',
    borderRadius: scaledSize(20),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ImageWrapper: {},
  DetailsWrapper: {
    marginLeft: deviceRelativeWidth(5),
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
  },
  separator: {
    backgroundColor: colors.gray,
    height: 0.5,
  },
});
