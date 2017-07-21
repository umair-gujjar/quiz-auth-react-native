import React from 'react';

import { StackNavigator } from 'react-navigation';

import Auth from '../components/auth/auth';

export const Router = StackNavigator({
    Auth: {
        screen: Auth
    }
});