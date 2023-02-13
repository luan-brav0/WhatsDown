import React, { FC, useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native'

type Props = {}

const Chat: FC<Props> = (props): JSX.Element => {
    type Message = {
        key: string,
        content: string,
        chat?: string,  
        time?: Date,
        author?: string,
        authorPhotoPath?: string,
    };
    const [inputValue, setInputValue] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const _sendPress = (): void => {
        if (inputValue) {
            let curAuthor = 'lul'
            let curTime = new Date();

            let curMessage: Message = { key: `${inputValue} @ ${curTime.toString()}`, content: inputValue, time: curTime, author: curAuthor  };

            setMessages(prevMessages => [...prevMessages, curMessage]);

            setInputValue("");
        };
    }

    const _onChangeText = (text: string): void => setInputValue(text)
    return (
        <View style={styles.container}>
            {messages &&
                (<View style={styles.messagesCont}>
                    {messages.map(({key, content, author, time }) => (
                        <Text key={key} style={styles.message}> {content} by {author} @ {time?.toString()}</Text>
                    ))}
                </View>)
            }
            <View style={styles.inputCont}>
                <TextInput style={styles.input}
                    placeholder="Message"
                    onChangeText={_onChangeText}
                    value={inputValue} />

                <Button color='blueviolet'
                    title={'send'}
                    onPress={_sendPress} />
            </View>
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
    messagesCont: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'pink',
    },
    message: {
        backgroundColor: 'cyan'
    },
    messageCont: {

    },
    messageTime: {

    },
    ownerCont: {

    },
    inputCont: {
        backgroundColor: 'red',
        width: '100%',
    },
    input: {
        color: 'lightgrey',
    },
});

export default Chat