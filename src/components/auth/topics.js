import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class Topics extends Component {
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
