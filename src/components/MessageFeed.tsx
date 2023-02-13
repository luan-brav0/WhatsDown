import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Message } from './Chat'

type Props = {
    messages: Message[],
}

const MessageFeed: FC<Props> = (props) => {
    return (
        <View style={styles.messagesCont}>
            {props.messages.map(({ key, content, author, time }) => (
                <Text key={key} style={styles.message}>
                    {content} by {author} @ {time?.toString()}
                </Text>
            ))}
        </View>
    )
}

export default MessageFeed

const styles = StyleSheet.create({
    messagesCont: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'pink',
    },
    message: {
        backgroundColor: 'cyan'
    },
})