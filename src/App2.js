/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    ActivityIndicator,
    ScrollView,
    TouchableHighlight,
    TextInput
} from 'react-native';


exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';
exports.examples = [
    {
        title: 'navigator.geolocation',
        render: function() {
            return <GeolocationExample />;
        },
    }
];
export default  class GeolocationExample extends Component<{}>{
    constructor(props){
        super(props);
        this.state={
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (initialPosition) => this.setState({initialPosition}),
            (error) => console.error(error)
        );
        this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
            this.setState({lastPosition});
        });
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {JSON.stringify(this.state.initialPosition)}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {JSON.stringify(this.state.lastPosition)}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});