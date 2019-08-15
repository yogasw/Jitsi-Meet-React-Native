/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import JitsiMeet, { JitsiMeetEvents} from 'react-native-jitsi-meet';
const initiateVideoCall = () => {
    JitsiMeet.initialize();

    JitsiMeetEvents.addListener('CONFERENCE_LEFT', (data) => {
        console.warn('CONFERENCE_LEFT',data);
    });
    setTimeout(() => {
        JitsiMeet.call('ari');
    }, 2000);
};

export default class App extends Component<Props> {
  constructor() {
      super();
      this.state = {
          userVideo: "https://meet.qiscus.com"
      }
  }
  componentDidMount(): void {
      initiateVideoCall()
  }

    render() {
        return (
                <Text>sip11</Text>
        );
    }
}

