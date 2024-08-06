import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { DetailsProps } from './types';

const Details = (props: DetailsProps) => {
  const departmentEntries = Object.entries(props.data?.depts);
  return (
    <View>
      {props.header === 'Professional Details' && (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Designation</Text>
              <Text style={styles.rightText}>{props.data?.designation}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>PEC No.</Text>
              <Text style={styles.rightText}>{props.data?.pec_no}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Role</Text>
              <Text style={styles.rightText}>{props.data?.role}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>School</Text>
              <Text style={styles.rightText}>{props.data?.school}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={[styles.leftText,{flex:1}]}>Department</Text>
              <View style={{flex:1}}>
                {departmentEntries.map((deptName, index) => (
                  <Text key={index} style={styles.rightText}>
                    {deptName[1]}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Highest Degree</Text>
              <Text style={styles.rightText}>
                {props.data?.heighest_degree}
              </Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>
        </View>
      )}

      {props.header === 'Personal Details' && (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>First Name</Text>
              <Text style={styles.rightText}>{props.data?.name}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>


          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>CNIC</Text>
              <Text style={styles.rightText}>{props.data?.cnic}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Email</Text>
              <Text style={styles.rightText}>{props.data?.email}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Mobile</Text>
              <Text style={styles.rightText}>{props.data?.cell}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Work Phone</Text>
              <Text style={styles.rightText}>{props.data.phone}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Alternate Number</Text>
              <Text style={styles.rightText}>{props.data.mobile2}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>
        </View>
      )}

      {props.header === 'Links' && (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Website</Text>
              <Text style={styles.rightText}>{props.data?.website}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Facebook ID</Text>
              <Text style={styles.rightText}>{props.data?.fb}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>LinkedIn ID</Text>
              <Text style={styles.rightText}>{props.data?.linkedin}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.topContainer}>
            <View style={styles.createSpaceView}>
              <Text style={styles.leftText}>Twitter Handle</Text>
              <Text style={styles.rightText}>{props.data?.tweeter}</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
