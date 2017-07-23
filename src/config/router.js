import React from 'react';

import { StackNavigator } from 'react-navigation';

import Auth from '../components/auth/auth';
import Signup from '../components/auth/signup';

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
    }
});