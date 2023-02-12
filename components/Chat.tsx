import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native'

type Props = {}

const Chat = (props: Props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const handleButtonPress = () => {
        if (inputValue) {
            setMessages(prevMessages => [...prevMessages, inputValue])
            setInputValue("")
            console.log(messages)
        }
    };

    return (
        <View style={styles.container}>
            {messages ?
                <FlatList style={styles.messagesCont}
                    data={messages}
                    renderItem={({ item }: { item: string }) => <Text style={styles.message}>{item}</Text>}
                />
                : null}

            <View style={styles.inputCont}>
                <TextInput style={styles.input}
                    placeholder="Message"
                    onChangeText={(text: string) => setInputValue(text)}
                    value={inputValue} />
                <Button color='blueviolet'
                    title={'send'}
                    onPress={handleButtonPress} />
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
    inputCont: {
        backgroundColor: 'red',
        width: '100%',
    },
    input: {
        color: 'lightgrey',
    },
});

export default Chat