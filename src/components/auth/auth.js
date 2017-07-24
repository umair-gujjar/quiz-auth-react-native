import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { firebaseAPI } from './authentication';
import { defaultStyles } from './defaultStyles';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            result: 'Sign in'
        }
    }

    componentDidMount() {
        firebaseAPI.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('this is user', user);
                this.props.navigation.navigate('Topics')
                // save user data and navigate to main page
            }
        })
    }

    onForgetPassword() {
        this.props.navigation.navigate('Signup')
    }

    onSubmit() {
        let { email, password } = this.state;
        firebaseAPI.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => {
                this.setState({result: err.message})
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    {this.state.result}
                </Text>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(input) => this.setState({email: input.toLowerCase()})}
                />

                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(input) => this.setState({password: input})}
                />
                <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => this.onSubmit()}
                >
                    <Text style={styles.button}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <View style={defaultStyles.links}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ResetPassword')}
                    >
                        <Text style={defaultStyles.link}>
                            Forgot you password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onForgetPassword()}
                    >
                    <Text style={defaultStyles.link}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
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
});
