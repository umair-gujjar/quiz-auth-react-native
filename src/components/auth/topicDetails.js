import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ListView,
    ScrollView
} from 'react-native';

import { colors, defaultStyles } from './defaultStyles';
import { topicsRef } from './authentication';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TopicDetails extends Component {
    constructor(props) {
        super(props);
        let { rowUid } = this.props.navigation.state.params;

        this.state = {
            commentInput: '',
            dataSource: ds.cloneWithRows(''),
            commentsRef: topicsRef.child(rowUid).child('comments')
        }
    }

    componentDidMount() {

        this.listenForItems(this.state.commentsRef);
    }

    listenForItems(ref) {
        ref.on('value', snap => {
            let comments = [];
            snap.forEach(child => {
                comments.push({
                    author: child.val().author,
                    comment: child.val().comment
                })
            });

            this.setState({dataSource: ds.cloneWithRows(comments)});
        })
    }

    addComment() {
        if (this.state.commentInput === '') {
            alert('You cna\'t post an empty comment can you?');
            return;
        }

        this.state.commentsRef.push({
            author: this.props.navigation.state.params.userName,
            comment: this.state.commentInput
        });

        this.setState({commentInput: ''});
    }

    renderRow(rowData) {
        return(
            <View style={styles.comments}>
                <View style={styles.author}>
                    <Text>
                        {rowData.author}
                    </Text>
                </View>
                <View style={styles.comment}>
                    <Text>
                        {rowData.comment}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        let { title, author } = this.props.navigation.state.params;

        return (
            <View style={defaultStyles.wideContainer}>
                <View style={styles.title}>
                    <Text style={styles.header}>
                        {title}
                    </Text>
                    <Text style={styles.subHeader}>
                        {author}
                    </Text>
                </View>
                <TextInput
                    value={this.state.commentInput}
                    controlled={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={defaultStyles.input}
                    placeholder='Comment here'
                    onChangeText={(text) => this.setState({commentInput: text})}
                    onEndEditing={() => this.addComment()}
                />
                <ScrollView>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        margin: 10
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    subHeader: {
        textAlign: 'center',
        fontSize: 18
    },
    comments: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 7,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1
    },
    author: {
        flex: 1
    },
    comment: {
        flex: 3
    }
});