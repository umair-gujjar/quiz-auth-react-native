import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { colors, defaultStyles } from './defaultStyles';

import { firebaseAPI, topicsRef } from './authentication';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            topicInput: '',
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
                    author: topic.val().author,
                    key: topic.key
                })
            });
            this.setState({dataSource: ds.cloneWithRows(topics)});
        })
    }

    addTopic() {
        if (this.state.topicInput === '') {
            alert('You can\'t send an empty topic, you just can\'t');
            return;
        }

        topicsRef.push({
            title: this.state.topicInput,
            author: this.state.userName,
        });

        this.setState({topicInput: ''})
    }

    goToDetails(data) {
        this.props.navigation.navigate('TopicDetails', {
            title: data.title,
            author: data.author,
            userName: this.state.userName,
            rowUid: data.key,
        })
    }

    renderRow(rowData) {
        return(
            <TouchableOpacity
                onPress={() => this.goToDetails(rowData)}
                style={styles.topicWrapper}>
                <Text style={styles.topicTitle}>
                    {rowData.title}
                </Text>
                <Text style={styles.topicAuthor}>
                    {rowData.author}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <View>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.topicInput}
                    controlled={true}
                    placeholder='add your topic'
                    style={defaultStyles.input}
                    onChangeText={(input) => this.setState({topicInput: input})}
                    onEndEditing={() => this.addTopic()}
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
