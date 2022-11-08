import * as React from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/CustomInput';
import {resetToScreen} from '../../navigation/rootAction';
import {
  deviceRelativeHeight,
  deviceRelativeWidth,
  EmailRegExp,
  scaledSize,
  showErrorMessage,
} from '../../utils';
import {colors} from '../../utils/theme';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    if (userName === 'reactnative@jetdevs.com' && password === 'jetdevs@123') {
      resetToScreen('AuthenticatedTab');
    } else if (!EmailRegExp.test(userName)) {
      showErrorMessage('Mail id must be in format. ex. abc@mail.com');
    } else {
      showErrorMessage('Mail id or password is wrong. Please try again!');
    }
  };

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAwareScrollView>
        <View style={styles.popup}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.headerImage}
              source={require('../../assets/reduxLogo.png')}
            />
          </View>
          <Text style={styles.title}>LOGIN</Text>

          <View style={styles.textFieldWrapper}>
            <CustomInput
              iconName={'email-outline'}
              iconType={'material-community'}
              label={userName ? '' : 'Email'}
              value={userName}
              ref={userNameRef}
              onChangeText={text => setUserName(text)}
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              tintColor={colors.primary}
            />

            <CustomInput
              iconName={'lock'}
              iconType={'octicon'}
              label={password ? '' : 'Password'}
              value={password}
              ref={passwordRef}
              onChangeText={text => setPassword(text)}
              returnKeyType="done"
              secureTextEntry={true}
              tintColor={colors.primary}
            />
          </View>
          <Button
            title={'LOGIN'}
            onPress={() => {
              onPressLogin();
            }}
            disabled={!userName && !password}
            buttonStyle={{
              backgroundColor: colors.primary,
              height: deviceRelativeHeight(5),
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default LoginScreen;
