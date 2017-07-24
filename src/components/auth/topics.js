import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TextInput
} from 'react-native';

import { colors, defaultStyles } from './defaultStyles';

import { firebaseAPI, topicsRef } from './authentication';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            dataSource: ds.cloneWithRows([])
        }
    }

    componentWillMount() {
        let user = firebaseAPI.auth().currentUser;
        if (!user.displayName) {
            this.props.navigation.navigate('ChooseUserName');
        } else {
            this.setState({userName: user.displayName});
            this.lisetenForTopics(topicsRef);
        }
    }

    lisetenForTopics(topicsRef) {
        topicsRef.on('value', (snapshot) => {
            let topics = [];
            snapshot.forEach(topic => {
                topics.push({
                    title: topic.val().title,
                    author: topic.val().author
                })
            });
            this.setState({dataSource: ds.cloneWithRows(topics)});
        })
    }

    renderRow(rowData) {
        return(
            <View style={styles.topicWrapper}>
                <Text style={styles.topicTitle}>
                    {rowData.title}
                </Text>
                <Text style={styles.topicAuthor}>
                    {rowData.author}
                </Text>
            </View>
        )
    }

    render() {
        return(
            <View>
                <TextInput
                    placeholder='add your topic'
                    style={defaultStyles.input}
                />

                <ListView
                    style={{marginTop: 10}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    topicWrapper: {
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,

    },
    topicTitle: {
        fontWeight: 'bold',
    }
});
