import {StyleSheet} from 'react-native';
import {
  deviceRelativeHeight,
  deviceRelativeWidth,
  scaledSize,
} from '../../utils';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: colors.white,
    marginHorizontal: deviceRelativeWidth(5),
    marginVertical: deviceRelativeHeight(12.5),
    height: deviceRelativeHeight(75),
    width: deviceRelativeWidth(90),
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    padding: scaledSize(15),
    paddingBottom: scaledSize(35),
    borderRadius: scaledSize(10),
  },
  title: {
    color: colors.textBlack,
    fontSize: scaledSize(28),
    alignSelf: 'center',
    fontWeight: '600',
  },
  textFieldWrapper: {
    marginVertical: scaledSize(40),
  },
  logoWrapper: {
    position: 'absolute',
    top: -35,
    left: deviceRelativeWidth(35),
  },
  headerImage: {
    width: scaledSize(70),
    height: scaledSize(70),
    resizeMode: 'contain',
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: scaledSize(35),
  },
});
