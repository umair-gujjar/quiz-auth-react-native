import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { firebaseAPI } from '../auth/authentication';

export default class Topics extends Component {
    logOut() {
        firebaseAPI.auth().logout().then(() => {
           this.props.navigation().navigate('Auth');
        }, (err) => {
            console.log('error: ', err)
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    this is fucking topic
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
