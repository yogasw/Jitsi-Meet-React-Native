/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Alert,
    View,
} from 'react-native'
import JitsiMeet, { JitsiMeetEvents} from 'react-native-jitsi-meet';

export default class videoService extends Component {
    constructor() {
        super();
    }
    initiateVideoCall = (id_room) => {
        JitsiMeet.initialize();
        JitsiMeetEvents.addListener('CONFERENCE_LEFT', (data) => {
            this.props.navigation.navigate("Home")
            // Alert.alert("Alert", "Panggilan Selesai")
        });
        setTimeout(() => {
            JitsiMeet.call(id_room);
        }, 2000);
    };

    componentDidMount() {
        this.initiateVideoCall(this.props.navigation.state.params.room_id)
    }

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});