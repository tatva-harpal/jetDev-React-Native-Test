import * as React from 'react';
import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../components/Header';
import {colors} from '../../utils/theme';
import {scaledSize} from '../../utils';
import {removeFromFavourite} from '../../redux/actions';
import {styles} from './styles';

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
  );
};

export default FavouriteScreen;
