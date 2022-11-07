import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {colors} from '../utils/theme';
import {deviceRelativeHeight, scaledSize} from '../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Image
          style={styles.headerImage}
          source={require('../assets/reduxLogo.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: colors.white,
    height: deviceRelativeHeight(5),
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: scaledSize(30),
    height: scaledSize(30),
    resizeMode: 'contain',
    overflow: 'hidden',
    alignSelf: 'center',
  },
});
export default Header;
