import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

import {deviceRelativeWidth, scaledSize} from '../../utils';

export const styles = StyleSheet.create({
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
