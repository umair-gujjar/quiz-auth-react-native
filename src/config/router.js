import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';
import { firebaseAPI } from '../components/auth/authentication';

import Auth from '../components/auth/auth';
import Signup from '../components/auth/signup';
import Topics from '../components/auth/topics';
import ChooseUserName from '../components/auth/chooseusername';
import TopicDetails from '../components/auth/topicDetails';
import ResetPassword from '../components/auth/resetPassword';

export const Router = StackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: ({navigation}) => ({
            title: 'Sign In'
        }),
    },
    Signup: {
        screen: Signup,
        navigationOptions: ({navigation}) => ({
            title: 'Sing Up'
        }),
    },
    Topics: {
        screen: Topics,
        navigationOptions: ({navigation}) => ({
            title: 'Topics',
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        firebaseAPI.auth().signOut().then(() => {
                            navigation.dispatch(NavigationActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({routeName: 'Auth'})]
                            }))
                        }, (err) => console.log('ERORR: ', err))
                    }}
                    style={{'marginRight': 10}}>
                    <Text>
                        Log out
                    </Text>
                </TouchableOpacity>
            )
        })
    },
    ChooseUserName: {
        screen: ChooseUserName
    },
    TopicDetails: {
        screen: TopicDetails,
        navigationOptions: ({navigation}) => ({
            title: 'Topic Details'
        })
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: ({navigation}) => ({
            title: 'Reset Password'
        })
    }
});