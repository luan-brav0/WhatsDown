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
        backgroundColor: 'green',
    }
})