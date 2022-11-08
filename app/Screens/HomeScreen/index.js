import React, {useEffect, useState} from 'react';
import {View, RefreshControl, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header';
import User from '../../components/User';
import {wait} from '../../utils';
import {addToFavourite, removeFromFavourite} from '../../redux/actions';
import {styles} from './styles';

const HomeScreen = ({}) => {
  const favData = useSelector(state => state.favouriteItems);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [randomUserData, setRandomUserData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const markAsFav = item => {
    dispatch(addToFavourite(item));
  };
  const removeFromFav = item => {
    dispatch(removeFromFavourite(item));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setCurrentPage(1);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const fetchRandomUserData = async () => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?results=10&page=${currentPage}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        setRandomUserData(
          currentPage === 1
            ? responseJson.results
            : [...randomUserData, ...responseJson.results],
        );
      })
      .catch(error => {
        console.log('Error selecting random data: ' + error);
      });
    setIsLoading(false);
  };
  const LoadMoreRandomData = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetchRandomUserData();
  }, [currentPage]);

  const renderItem = ({item}) => {
    const isFav = favData.length > 0 && favData.find(data => item === data);
    return (
      <User
        item={item}
        markAsFav={markAsFav}
        removeFromFav={removeFromFav}
        isFav={isFav}
      />
    );
  };
  const renderFooter = () => (
    <View style={styles.footerText}>{isLoading && <ActivityIndicator />}</View>
  );

  return (
    <SafeAreaView style={styles.mainView}>
      <Header />
      <View style={styles.listWrapper}>
        <FlatList
          data={randomUserData}
          renderItem={renderItem}
          keyExtractor={item => item.email}
          onEndReachedThreshold={0.5}
          onEndReached={LoadMoreRandomData}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
