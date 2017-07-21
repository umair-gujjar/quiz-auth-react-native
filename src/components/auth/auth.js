import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Auth extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    this shit is for login
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
