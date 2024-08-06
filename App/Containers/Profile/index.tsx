import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  RefreshControl,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary
} from 'react-native-image-picker';
import { User } from '../../Assets/SVGs';
import Camera from '../../Assets/SVGs/Camera';
import Forward from '../../Assets/SVGs/Forward';
import Link from '../../Assets/SVGs/Link';
import ProfessionalDetails from '../../Assets/SVGs/ProfessionalDetails';
import { GenericMessage, Spinner } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import {
  useUserProfileQuery,
  useUserprofilepictureMutation
} from '../../RTK/Api/CourseApi';
import { Images } from '../../Themes';
import { Header, HeaderLeft, HeaderRight } from './components';
import styles from './styles';
const Profile = (props: any) => {
  const navigation = useNavigation();
  const [
    userPicture,
    { data: pictureDate, error: pictureError, isLoading: pictureLoad }
  ] = useUserprofilepictureMutation({});
  const [refresh, setRefresh] = useState(false);
  const [edit, setEdit] = React.useState(false);
  const [toastShown, setToastShown] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState<ImagePicker.Asset[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigations = useNavigation<IHomeNavigationProp>();
  const { refetch, isError, isLoading, data, isFetching, error } =
    useUserProfileQuery({});
  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => <HeaderRight edit={edit} setEdit={setEdit} />
    });
    navigation.setOptions({
      headerTitle: () => <Header edit={edit} />
    });

    navigation?.setOptions({
      headerLeft: () => <HeaderLeft/>
    });


  }, [edit]);

  useFocusEffect(
    React.useCallback(() => {

      console.debug(refresh)
      if (props.route.params?.from === 'ProfileDetail' && !refresh) {
        console.debug('COMES');
        refetch()
        setRefresh(true);
    
      }
    }, [props,refresh])
  );

  const requestGalleryPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Gallery Permission',
            message: 'App needs access to your gallery.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const openImagePicker = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'You need to grant gallery permissions.'
      );
      return;
    }

    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200
    };

    try {
      const response: ImagePickerResponse = await launchImageLibrary(options);
      const selectedAsset: ImagePicker.Asset[] = response.assets ?? [];
      if (selectedAsset.length > 0 && selectedAsset[0].uri) {
        setSelectedAssets(selectedAsset);
        setSelectedImage(selectedAsset[0].uri);
      } else {
        setSelectedImage(null);
      }
    } catch (error) {
      console.debug(error);
    }
  };

  if (isFetching || isLoading || pictureLoad ) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  const onRefresh = async () => {
    refetch();
  };

  const saveImage = () => {
    if(selectedAssets.length>0){
    userPicture({
      name: selectedAssets[0].fileName,
      uri: selectedAssets[0].uri,
      type: selectedAssets[0].type
    });
  }else{
    ToastAndroid.show('Please select a photo first',ToastAndroid.SHORT)
  }
  };
  const handleRefetch = () => {
    refetch(); // Call the refetch function to refresh data
  };

  if(!toastShown && !pictureLoad && pictureDate!=undefined){
    if(pictureDate.success){
      ToastAndroid.show(pictureDate.message,ToastAndroid.SHORT)
      refetch()
      setToastShown(true)
    }else{
      ToastAndroid.show('Something went wrong',ToastAndroid.SHORT)
      setToastShown(true)
    }
  }
  
  
  return (
    <ScrollView
      style={{ height: '100%', flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          {data?.dp ? (
            <Image
              source={
                selectedImage
                  ? { uri: selectedImage }
                  : { uri: BASE_URL + data?.dp }
              }
              style={styles.profile}
            />
          ) : (
            <View>
              {selectedImage ? (
                <Image
                  source={selectedImage ? { uri: selectedImage } : {}}
                  style={styles.profiles}
                />
              ) : (
                <Image
                  source={Images.profilePlaceholderdownload}
                  style={styles.profile}
                />
              )}
            </View>
          )}

          {!edit ? (
            <View style={{marginTop:10,alignItems:'center' }}>
              <Text style={styles.TeacherName}>{data?.name}</Text>
              <Text style={styles.teacherDetails}>{data?.designation}</Text>
            </View>
          ) : (
            <View
              style={{ justifyContent: 'space-between', flexDirection: 'row',marginTop:10 }}>
              <TouchableOpacity
                style={selectedImage ? styles.camerView2 : styles.camerView}
                onPress={() => {
                  openImagePicker();
                }}>
                <Camera />
                <Text style={styles.whiteTxt}>Upload Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={selectedImage ? styles.saveView2 : styles.saveView}
                onPress={() => {
                  saveImage();
                }}>
                <Camera />
                <Text style={styles.whiteTxt}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={{ padding: 10, flex: 1, marginBottom: 40 }}>
          <TouchableOpacity
            onPress={() => {
              setRefresh(false)
              navigations.navigate('ProfileDetails', {
                label: 'Professional Details',
                icon: () => (
                  <ProfessionalDetails
                    width={20}
                    height={20}
                    style={{ top: 2, right: 2 }}
                  />
                ),
                data: data,
       
              });
             
            }}>
            <View style={styles.detailContainer}>
              <View style={styles.directionView}>
                <ProfessionalDetails width={20} height={20} />
                <Text style={styles.header}>Professional Details</Text>
              </View>
              <Forward />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ top: 10 }}
            onPress={() => {
              setRefresh(false)
              navigations.navigate('ProfileDetails', {
                label: 'Personal Details',
                icon: () => <User width={20} height={20} />,
                data: data   ,

              });
           
            }}>
            <View style={styles.detailContainer}>
              <View style={styles.directionView}>
                <User width={19} height={19} />
                <Text style={styles.header}>Personal Details</Text>
              </View>
              <Forward />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ top: 20 }}
            onPress={() => {
              setRefresh(false)
              navigations.navigate('ProfileDetails', {
                label: 'Links',
                icon: () => (
                  <Link width={20} height={20} style={{ top: 2, right: 2 }} />
                ),
                data: data,
       
              });
       
            }}>
            <View style={styles.detailContainer}>
              <View style={styles.directionView}>
                <Link width={20} height={20} />
                <Text style={styles.header}>Links</Text>
              </View>
              <Forward />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
