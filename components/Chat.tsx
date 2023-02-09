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
        borderWidth: 2,
        width: '90%',
        marginVertical:'5%',
        backgroundColor: 'darkViolet',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Chat