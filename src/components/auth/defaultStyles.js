import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
    black: 'black',
    blue: 'blue',
    main: 'white',
    secondary: 'grey'
};

export const defaultStyles = StyleSheet.create({
    wideContainer: {
        flex: 1,
    },
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
