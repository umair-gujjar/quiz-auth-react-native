import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { firebaseAPI } from './authentication';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            result: '',
            confirmPassword: ''

        }
    }

    onSubmit() {
        if (this.state.password === this.state.confirmPassword) {
            let { email, password } = this.state;
            firebaseAPI.auth().createUserWithEmailAndPassword(email, password)
                .catch((err) => {
                    this.setState({result: err.message})
                })
        } else {
            this.setState({result: 'Your passwords don\'t match...'})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    {this.state.result}
                </Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(input) => this.setState({email: input.toLowerCase()})}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(input) => this.setState({password: input})}
                />
                <TextInput
                    placeholder='Confirm Password'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(input) => this.setState({confirmPassword: input})}
                />
                <TouchableOpacity
                    onPress={() => this.onSubmit()}
                    style={styles.buttonWrapper}>
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
