/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { View, Button, PixelRatio, Dimensions } from 'react-native';
import { Storyly } from 'storyly-react-native';

export default class App extends Component {
    render() {
        return (
            <View>
                <Storyly
                    ref={ref => { this.storyly = ref }}
                    style={{ width: '100%', height: 120, marginTop: 44 }}
                    storylyId="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NfaWQiOjc2MCwiYXBwX2lkIjo0MDUsImluc19pZCI6NDA0fQ.1AkqOy_lsiownTBNhVOUKc91uc9fDcAxfQZtpm3nj40"
                    storylyTestMode={true}
                    onLoad={storyGroupList => {
                        console.log("[Storyly] onLoad");
                    }}
                    onFail={errorMessage => {
                        console.log("[Storyly] onFail");
                    }}
                    onPress={story => {
                        console.log("[Storyly] onPress");
                    }}
                    onEvent={eventPayload => {
                        // console.log(eventPayload.nativeEvent);
                        console.log("[Storyly] onEvent");
                    }}
                    onStoryOpen={() => {
                        console.log("[Storyly] onStoryOpen");
                    }}
                    onStoryClose={() => {
                        console.log("[Storyly] onStoryClose");
                    }}
                    onUserInteracted={interactionEvent => {
                        // console.log(interactionEvent.nativeEvent);
                        console.log("[Storyly] onStoryUserInteracted");
                    }}/>
                <Button
                    onPress={() => { this.storyly.refresh(); }}
                    title="Refresh"
                />
            </View>
        );
    }
}
