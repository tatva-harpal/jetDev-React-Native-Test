import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CustomInput from '../../components/CustomInput';
import {resetToScreen} from '../../navigation/rootAction';
import {deviceRelativeHeight, EmailRegExp, showErrorMessage} from '../../utils';
import {colors} from '../../utils/theme';
import {styles} from './styles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const onPressLogin = () => {
    if (userName === 'reactnative@jetdevs.com' && password === 'jetdevs@123') {
      resetToScreen('AuthenticatedTab');
    } else if (!EmailRegExp.test(userName)) {
      showErrorMessage('Mail id must be in format. ex. abc@mail.com');
    } else {
      showErrorMessage('Mail id or password is wrong. Please try again!');
    }
  };

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

export default LoginScreen;
