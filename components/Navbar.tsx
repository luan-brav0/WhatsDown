import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {

}

const Navbar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.p}>Navbar</Text>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    p: {
        backgroundColor: 'lightGray',
    },
    container: {
        flex: 1,
        // height: 'full',
        width: '100%',
        backgroundColor: 'green',
        borderWidth: 2
    }
})