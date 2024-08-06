import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock } from '../../Assets/SVGs';
import TickCircle from '../../Assets/SVGs/TickCircle';
import { InputField, RoundedButton, Spinner } from '../../Components';
import { useChangePasswordMutation } from '../../RTK/Api/AuthApi';
import { Header } from './components';
import styles from './styles';

const ChangePasswordPage = () => {
  const { t } = useTranslation('login');
  const { t: loginErrors } = useTranslation('errors');
  const navigation = useNavigation<IHomeNavigationProp>();
  const navigations = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordConfirmationError, setNewPasswordConfirmationError] =
    useState('');
  const [changePassword, { isLoading, isError, isSuccess }] =
    useChangePasswordMutation();
  useEffect(() => {
    if (isError) {
      setNewPasswordConfirmationError(loginErrors('errorChangingPassword'));
    }
  }, [isError]); 

  useEffect(() => {
 
    navigations.setOptions({
      headerTitle: () =>
        <Header  />
    });



  },);

  const onNewPasswordChanged = useCallback((value: string) => {
    setNewPasswordError('');
    setNewPassword(value);
  }, []);

  const onNewPasswordConfirmationChanged = useCallback((value: string) => {
    setNewPasswordConfirmationError('');
    setNewPasswordConfirmation(value);
  }, []);

  const onOldPasswordChanged = useCallback((value: string) => {
    setOldPasswordError('');
    setOldPassword(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (
      newPassword.length === 0 ||
      newPasswordConfirmation.length === 0 ||
      oldPassword.length === 0
    ) {
      if (newPassword.length === 0) {
        setNewPasswordError(loginErrors('emptyField'));
      }
      if (newPasswordConfirmation.length === 0) {
        setNewPasswordConfirmationError(loginErrors('emptyField'));
      }
      if (oldPassword.length === 0) {
        setOldPasswordError(loginErrors('emptyField'));
      }
      return;
    }
    if (newPassword !== newPasswordConfirmation) {
      setNewPasswordConfirmationError('passwordNotMatched');
    }
    await changePassword({ oldPassword, newPassword, newPasswordConfirmation });
  }, [newPassword, newPasswordConfirmation, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
        }}>
  
        <Surface style={styles.innerContainer}>
          {isSuccess ? (
            <View
              style={{
                flex: 1,
                paddingVertical: 100,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
              <TickCircle />
              <Text style={styles.successText}>
                {t('passwordChangedSuccessfully')}
              </Text>
              <RoundedButton
                label={t('done')}
                onPress={() => navigation.navigate('Home')}
                style={styles.loginButton}
              />
            </View>
          ) : (
            <>
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>{t('createNewPassword')}</Text>
                <Text style={styles.bodyText}>
                  {t('pleaseCreateNewPassword')}
                </Text>
              </View>
              <View
                style={[
                  styles.passwordConfirmationContainer,
                  oldPasswordError ? { marginBottom: 10 } : {}
                ]}>
                <Text style={styles.label}>{t('enterOldPassword')}</Text>
                <InputField
                  value={oldPassword}
                  style={styles.inputField}
                  onTextChange={value => onOldPasswordChanged(value)}
                  error={oldPasswordError}
                  isError
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.labelContainer}>
                <Lock height={20} width={20} />
                <Text style={[styles.label, styles.labelSpacing]}>
                  {t('createNewPassword')}
                </Text>
              </View>
              <InputField
                style={styles.inputField}
                onTextChange={value => onNewPasswordChanged(value)}
                value={newPassword}
                error={newPasswordError}
                isError
                secureTextEntry={true}
              />
              <View style={styles.passwordConfirmationContainer}>
                <Text style={styles.label}>{t('confirmNewPassword')}</Text>
                <InputField
                  value={newPasswordConfirmation}
                  style={styles.inputField}
                  onTextChange={value =>
                    onNewPasswordConfirmationChanged(value)
                  }
                  error={newPasswordConfirmationError}
                  isError
                  secureTextEntry={true}
                />
              </View>

              <RoundedButton
                label={t('create')}
                onPress={handleSubmit}
                style={styles.loginButton}
              />

              <TouchableOpacity
                onPress={navigation.goBack}
                style={styles.backButtonContainer}
                hitSlop={styles.hitSlop}>
                <Text style={styles.backButtonText}>{t('back')}</Text>
              </TouchableOpacity>
            </>
          )}
        </Surface>
        {isLoading && <Spinner />}
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};

export default ChangePasswordPage;
