import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Icon} from 'react-native-elements';
import {TextField} from 'rn-material-ui-textfield';

import {colors} from '../utils/theme';
import {scaledSize} from '../utils';

const styles = StyleSheet.create({
  inputLabel: {
    paddingTop: 3,
    color: colors.white,
  },
  inputText: {
    fontSize: scaledSize(14),
  },
  paddingEnd10: {paddingEnd: 10},
});

function CustomInput(props, ref) {
  const {
    iconName,
    iconType,
    label,
    value,
    error,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    textColor = colors.textBlack,
    fontSize = scaledSize(16),
    labelFontSize = scaledSize(14),
    tintColor = colors.gray,
    baseColor = colors.gray,
    errorColor = colors.red,
    labelTextStyle = styles.inputLabel,
    returnKeyType = 'done',
    secureTextEntry = false,
    maxLength,
    keyboardType,
    ...rest
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const renderRightIcon = React.useCallback(() => {
    return secureTextEntry ? (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.paddingEnd10}
        onPress={() => {
          setPasswordVisible(!passwordVisible);
        }}>
        <Icon
          color={baseColor}
          name={passwordVisible ? 'ios-eye-outline' : 'ios-eye-off-outline'}
          type="ionicon"
          size={scaledSize(25)}
        />
      </TouchableOpacity>
    ) : null;
  }, [secureTextEntry, passwordVisible]);

  const iconColor = ref?.current?.focused ? colors.primary : colors.gray;
  const renderLeftIcon = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.paddingEnd10}>
        <Icon
          color={iconColor}
          name={iconName}
          type={iconType}
          size={scaledSize(25)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <TextField
      label={label}
      value={value}
      error={error}
      ref={ref}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      textColor={textColor}
      fontSize={fontSize}
      labelFontSize={labelFontSize}
      tintColor={tintColor}
      baseColor={baseColor}
      errorColor={errorColor}
      labelTextStyle={labelTextStyle}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      renderRightAccessory={renderRightIcon}
      renderLeftAccessory={renderLeftIcon}
      secureTextEntry={secureTextEntry && !passwordVisible}
      maxLength={maxLength}
      lineWidth={1}
      activeLineWidth={1}
      disabledLineWidth={1}
      keyboardType={keyboardType}
      {...rest}
    />
  );
}

export default React.forwardRef(CustomInput);
