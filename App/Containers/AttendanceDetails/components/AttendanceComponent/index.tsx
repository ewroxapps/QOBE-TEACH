import { Image, Text, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { AttendanceProps } from './types';
const AttendanceComponent = (props:AttendanceProps) => {
   
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.header}>{props.index}</Text>
                    <View style={styles.leftContainer}>
                        {props.data.dp ? (
                            <Image
                                source={{
                                    uri: `${BASE_URL}${props.data.dp}`
                                }}
                                defaultSource={Images.profilePlaceholder}
                                style={styles.profile}
                            />
                        ) : (
                            <Image source={Images.profilePlaceholder} style={styles.profile} />
                        )}

                        <View style={styles.topTextContainer}>
                            <Text style={styles.classLabel} numberOfLines={2}>
                                {props.data.name}
                            </Text>
                            <Text style={styles.instructorName}>{props.data.reg_no}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.totalView}>
                    <View style={styles.totalinnerView}>
                        <Text style={styles.totaltxt}>{props.data.percentage}</Text>
                        <Text style={styles.totaldowntxt}>{props.data.presents}/{props.data.total}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AttendanceComponent;
