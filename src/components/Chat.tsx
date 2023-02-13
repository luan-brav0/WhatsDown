import React, { FC, useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native'
import MessageFeed from './MessageFeed'
import MessageInput from './MessageInput'

type Props = {
    author: string | null
    setAuthor: React.Dispatch<React.SetStateAction<string | null>>
}
export type Message = {
    key: string,
    content: string,
    chat?: string | null,
    time?: Date,
    author?: string | null,
    pictureURL?: string,
};

const Chat: FC<Props> = (props): JSX.Element => {
    const [author, setAuthor] = [props.author, props.setAuthor];
    setAuthor("author_here")
    const [messages, setMessages] = useState<Message[]>([]);
    return (
        <View style={styles.container}>
            {messages && (<MessageFeed messages={messages} />)}
            <MessageInput setMessages={setMessages} author={author} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '95%',
        backgroundColor: 'darkViolet',
        flex: 11 / 12,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    messageCont: {

    },
    messageTime: {

    },
    ownerCont: {

    },
});

export default Chat