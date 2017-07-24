import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { firebaseAPI } from './authentication';
import { defaultStyles } from './defaultStyles';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            result: ''
        }
    }

    onSend() {
        if (this.state.email === '') {
            this.setState({result: 'You need to enter an email first'});
            return;
        }

        firebaseAPI.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.setState({result: 'Email was sent successfully', email: ''})
            }, (err) => {
                this.setState({result: err})
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>
                    {this.state.result}
                </Text>
                <TextInput
                    value={this.state.email}
                    controlled={true}
                    placeholder='Enter your email'
                    underlineColorAndroid='rga(0, 0, 0)'
                    style={defaultStyles.input}
                    onChangeText={(input) => this.setState({email: input.toLowerCase()})}
                />
                <TouchableOpacity
                    style={defaultStyles.links}
                    onPress={() => this.onSend()}
                >
                    <Text style={defaultStyles.link}>
                        Send reset mail
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
