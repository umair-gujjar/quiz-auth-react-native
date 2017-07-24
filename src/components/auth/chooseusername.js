import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { defaultStyles } from './defaultStyles';

import { firebaseAPI } from './authentication';

export default class ChooseUserName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    onSubmit() {
        let user = firebaseAPI.auth().currentUser;
        user.updateProfile({
            displayName: this.state.userName
        }).then(() => {
            this.props.navigation.navigate('Topics')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Change Username
                </Text>
                <TextInput
                    style={defaultStyles.input}
                    placeholder='Type Your User Name'
                    onChangeText={(data) => this.setState({userName: data})}
                />
                <TouchableOpacity
                    onPress={() => this.onSubmit()}
                    style={defaultStyles.buttonWrapper}>
                    <Text>
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
    },
    header: {
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        borderColor: 'black',
    }
});

