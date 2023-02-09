import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const Chat = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={{ backgroundColor: 'red', }}>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    p: {
        backgroundColor: 'red',
    },
    container: {
        backgroundColor: 'darkViolet',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Chat