import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Message } from './Chat'

type Props = {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    author: string | null,
}

const MessageInput: FC<Props> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const _sendPress = (): void => {
        if (inputValue) {
            let curTime = new Date();
            let curMessage: Message = { key: `${inputValue} @ ${curTime.toString()}`, content: inputValue, time: curTime, author: props.author };
            props.setMessages(prevMessages => [...prevMessages, curMessage]);
            setInputValue("");
        };
    }

    const _onChangeText = (text: string): void => setInputValue(text)


    return (
        <View style={styles.inputCont}>
            <TextInput style={styles.input}
                placeholder="Message"
                onChangeText={_onChangeText}
                value={inputValue} />

            <Button color='blueviolet'
                title={'send'}
                onPress={_sendPress} />
        </View>
    )
}

export default MessageInput

const styles = StyleSheet.create({
    inputCont: {
        backgroundColor: 'red',
        width: '100%',
    },
    input: {
        color: 'lightgrey',
    },
})