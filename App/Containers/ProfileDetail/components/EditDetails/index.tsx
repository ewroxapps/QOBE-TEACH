import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Spinner } from '../../../../Components';
import { useUpdateUserProfileMutation } from '../../../../RTK/Api/CourseApi';
import styles from './styles';
import { EditDetailsProps } from './types';
const EditDetails = (props: EditDetailsProps) => {
  const [designation, setDesignation] = useState(props.data?.designation);
  const [pec, setPec] = useState(props.data?.pec_no);
  const [cnic, setCnic] = useState(props.data?.cnic);
  const [hdegree, setHDegree] = useState(props.data?.cnic);
  const [first, setfirst] = useState(props.data?.name);
  const [email, setEmail] = useState(props.data.email);
  const [mobile, setMobile] = useState(props.data?.cell);
  const [work, setWork] = useState(props.data.phone);
  const [alternate, setAlternate] = useState(props.data.mobile2);
  const [website, setWebsite] = useState(props.data?.website);
  const [facebook, setFacebook] = useState(props.data?.fb);
  const [linkedIn, setLinkedIn] = useState(props.data?.linkedin);
  const [twitter, setTwitter] = useState(props.data?.tweeter);
  const navigations = useNavigation<IHomeNavigationProp>();

  const [updateProfile, { isLoading, isError, isSuccess, error, data }] =
    useUpdateUserProfileMutation();

  function myupdateProfiles() {
    updateProfile({
      fname: first,
      mname: '',
      lname: '',
      cell: mobile,
      phone: work,
      mobile2: alternate,
      designation: designation,
      cnic:cnic,
      pec_no: pec,
      hdegree:hdegree,
      website:website,
      fb:facebook,
      linkedin:linkedIn,
      tweeter:twitter
    });
  }
  if(!isLoading && data!=undefined){
    if(data.success){
      ToastAndroid.show('Successfully updated',ToastAndroid.SHORT)
      
     
    }else{
      ToastAndroid.show('Please try again.',ToastAndroid.SHORT)
    }
  }
  if(isLoading){
    return(
      <Spinner/>
    )
  }
  return (

      <View style={{height:'100%'}}>
        <ScrollView  style={{
          paddingLeft: 20,
          paddingHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 10,

        }}>
        {props.header === 'Professional Details' && (
          <View style={{height:Dimensions.get('screen').height/1.3}}>
            <Text style={styles.textStyle}>Designation</Text>
            <TextInput
              style={styles.titletextInput}
              value={designation}
              onChangeText={value => setDesignation(value)}
            />

            <Text style={styles.textStyle}>PEC NO.</Text>
            <TextInput
              style={styles.titletextInput}
              value={pec}
              onChangeText={value => setPec(value)}
            />

            <Text style={styles.textStyle}>CNIC</Text>
            <TextInput
              style={styles.titletextInput}
              value={cnic}
              onChangeText={value => setCnic(value)}
            />

          <Text style={styles.textStyle}>Highest Degree</Text>
            <TextInput
              style={styles.titletextInput}
              value={hdegree}
              onChangeText={value => setHDegree(value)}
            />

            <View style={styles.containers}>
              <TouchableOpacity style={styles.button}   onPress={() => {
                  myupdateProfiles();
                }}>
                <Text style={styles.whiteTxt}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      

        {props.header === 'Links' && (
          <View style={{height:Dimensions.get('screen').height/1.3}}>
            <Text style={styles.textStyle}>Website</Text>
            <TextInput
              style={styles.titletextInput}
              value={website}
              onChangeText={value => setWebsite(value)}
            />

            <Text style={styles.textStyle}>Facebook</Text>
            <TextInput
              style={styles.titletextInput}
              value={facebook}
              onChangeText={value => setFacebook(value)}
            />
            <Text style={styles.textStyle}>LinkedIn</Text>
            <TextInput
              style={styles.titletextInput}
              value={linkedIn}
              onChangeText={value => setLinkedIn(value)}
            />

            <Text style={styles.textStyle}>Twitter Handler</Text>
            <TextInput
              style={styles.titletextInput}
              value={twitter}
              onChangeText={value => setTwitter(value)}
            />

            <View style={styles.containers}>
              <TouchableOpacity style={styles.button}   onPress={() => {
                  myupdateProfiles();
                }}>
                <Text style={styles.whiteTxt}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {props.header === 'Personal Details' && (
          <View style={{height:Dimensions.get('screen').height/1.3}}>
            <Text style={styles.textStyle}>First Name</Text>
            <TextInput
              style={styles.titletextInput}
              value={first}
              onChangeText={value => setfirst(value)}
            />

          

            <Text style={styles.textStyle}>Email</Text>
            <TextInput
              style={styles.titletextInput}
              value={email}
              onChangeText={value => setEmail(value)}
            />

            <Text style={styles.textStyle}>Mobile</Text>
            <TextInput
              style={styles.titletextInput}
              value={mobile}
              onChangeText={value => setMobile(value)}
            />

            <Text style={styles.textStyle}>Work Phone</Text>
            <TextInput
              style={styles.titletextInput}
              value={work}
              onChangeText={value => setWork(value)}
            />

            <Text style={styles.textStyle}>Alternative Number</Text>
            <TextInput
              style={styles.titletextInput}
              value={alternate}
              onChangeText={value => setAlternate(value)}
            />

            <View style={styles.containers}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  myupdateProfiles();
                }}>
                <Text style={styles.whiteTxt}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        </ScrollView>
      </View>
  );
};

export default EditDetails;
