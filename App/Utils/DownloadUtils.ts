import { getI18n } from 'react-i18next';
import { Alert, PermissionsAndroid, ToastAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const downloadFile = async (url: string, fileName: string) => {
  try {
    let permissionResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    console.log('permission result', permissionResult);
    let granted;
    if (!permissionResult) {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
    }

    if (permissionResult || granted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.showWithGravity(
        getI18n().t('common:downloadStarted'),
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      RNFetchBlob.config({
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`,
          title: getI18n().t('common:downloadingFile')
        },
        fileCache: true
      })
        .fetch('GET', url, {})
        .then(res => {
          ToastAndroid.showWithGravity(
            getI18n().t('common:downloadCompleted'),
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        })
        .catch(err => {
          console.log(err.toString());
          Alert.alert(getI18n().t('errors:fileNotDownloaded'));
        });
    } else {
      Alert.alert(
        getI18n().t('common:permissionDenied'),
        getI18n().t('common:writePermissionInstructions')
      );
    }
  } catch (err) {
    console.warn(err);
  }
};
