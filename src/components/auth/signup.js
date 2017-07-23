import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Sign In
                </Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.button}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },
    header: {
        textAlign: 'center'
    },
    input: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        height: 50,
        margin: 5,
        textAlign: 'center'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    link: {
        color: 'blue'
    }
});
