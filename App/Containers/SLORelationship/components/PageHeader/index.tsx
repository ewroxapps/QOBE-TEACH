import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import WhiteBack from '../../../../Assets/SVGs/WhiteBack';
import WhiteNext from '../../../../Assets/SVGs/WhiteNext';
import styles from './styles';

const PageHeader = () => {
  return (
    
        <View style={styles.container}>
          <View style={styles.innerView}>
            <View style={styles.viewer}>
              <Text style={styles.textColor}>Assessment Menthod</Text>
            </View>
            <View style={styles.moverView}>
              <TouchableOpacity>
                <WhiteBack />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
                <Text style={[styles.textColor, { fontSize: 12 }]}>
                  CLO 1
                </Text>
                <Text style={[styles.textColor, { fontSize: 10,left:4 }]}>
                    (15.00)
                </Text>
              </View>

              <TouchableOpacity>
                <WhiteNext />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    
   
  );
};

export default PageHeader;
