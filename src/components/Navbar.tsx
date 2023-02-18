import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text>Navbar</Text>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
})