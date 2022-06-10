import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'


export default function Home({ navigation }) {
    return (
        <Navbar>
            <Text>Home Page</Text>
        </Navbar>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#496CE8",
        flex: 1,
        justifyContent: "center",


    },
    main: {
        backgroundColor: "white",
        height: "80%",
        marginTop: 10,
        // borderRadius: 20
    }
})