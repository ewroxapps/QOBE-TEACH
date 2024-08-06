import React from 'react';
import { Text, View } from 'react-native';
import Discussion from '../../../../Assets/SVGs/Discussion';
import Discussion2 from '../../../../Assets/SVGs/Discussion2';
import colors from '../../../../Themes/Colors';
import StartDiscussionView from '../StartDiscussionView';
import styles from './styles';
import { DiscussionViewProps } from './types';
const DiscussionEmpty = (props:DiscussionViewProps) => {
    
    return (

        <View style={{ flex:1, flexDirection:'column',  backgroundColor: colors.background,}}>
            <StartDiscussionView totalDiscussion={props.totalDiscussion} classID={props.classID} click={props.click} setClick={props.setClick}/>
            <View style={styles.container}>
                <View style={{ paddingRight: 3 }}>
                    <Discussion style={{ marginTop: 4 }} />
                    <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
                </View>
                <Text style={styles.textStyle}>Start Your Discussion</Text>
            </View>
        </View>

    );
};
export default DiscussionEmpty;
