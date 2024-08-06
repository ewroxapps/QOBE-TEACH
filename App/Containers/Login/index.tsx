import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, User } from '../../Assets/SVGs';
import { InputField, Spinner } from '../../Components';
import { useLoginMutation } from '../../RTK/Api/AuthApi';
import images from '../../Themes/Images';
import styles from './styles';

const LoginPage = () => {
  const { t } = useTranslation('login');
  const { t: loginErrors } = useTranslation('errors');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [createMutation, { isLoading, isError,error }] = useLoginMutation();

  useEffect(() => {
    if (isError) {
      setPasswordError(loginErrors('incorrectCredentials'));
  
    }
  }, [isError]);

  const onUsernameChanged = useCallback((value: string) => {
    setUsernameError('');
    setUsername(value);
  }, []);

  const onPasswordChanged = useCallback((value: string) => {
    setPasswordError('');
    setPassword(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (username.length == 0 || password.length == 0) {
      if (username.length == 0) {
        setUsernameError(t('usernameNotEmpty'));
      }
      if (password.length == 0) {
        setPasswordError(t('passwordNotEmpty'));
      }
      return;
    }
    await createMutation({ username, password });
    
  }, [username, password, isError]);

  console.debug(error)
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          marginBottom: 70
        }}
        extraHeight={50}>
        <Image
          source={images.loginBg}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <View style={styles.logoContainer}>
          <Image source={images.appLogo} />
          <Text style={styles.qobe}>{t('qobe')}</Text>
        </View>
        <Surface style={styles.innerContainer} >
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Faculty Login</Text>
            <Text style={styles.bodyText}>{t('fillFields')}</Text>
          </View>
          <View style={{flex:1, marginTop:-50}}>
          <User width={20} height={20} />
          <InputField
            label={t('username')}
            style={styles.inputField}
            onTextChange={value => onUsernameChanged(value)}
            value={username}
            error={usernameError}
            isError
          />
          <View style={styles.passwordInputContainer}>
            <Lock height={20} width={20} />
            <InputField
              value={password}
              label={t('password')}
              style={styles.inputField}
              onTextChange={value => onPasswordChanged(value)}
              error={passwordError}
              isError
              secureTextEntry={true}
            />
          </View>
          </View>
          <View style={{flex:1}}>
          
             <TouchableOpacity style={styles.bluebutton} onPress={handleSubmit}>
              <Text style={styles.text}>Login</Text>
             </TouchableOpacity>
          </View>

        </Surface>
        {isLoading && <Spinner />}
      </KeyboardAwareScrollView>
      <View style={styles.alfozeLogoContainer}>
        <Image
          source={images.creatorLogo}
          resizeMode="contain"
          style={{ width: 120 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
