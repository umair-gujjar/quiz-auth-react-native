import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
    black: 'black',
    blue: 'blue',
    main: 'white',
    secondery: 'grey'
};

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.black,
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
        borderColor: colors.black,
        borderRadius: 5
    }
});
