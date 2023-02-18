import { Pressable, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Main = () => {

    return (
        <View style={styles.main}>
            <TextInput style={styles.email} placeholder='e-mail' />
            <Pressable style={styles.pressLogIn}>
                {/* why svg image doesn't f-ing work */}
                {/* <Image source={require('./images/chat-app-logo.svg')} /> */}
                <Text>Enter</Text>
            </Pressable>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        borderColor: 'grey',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressLogIn: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 4,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        backgroundColor: 'lightgrey',
        width: '80%',
        padding: 4,
        borderRadius: 4,
    },

})