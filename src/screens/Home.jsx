import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'


export default function Home({ navigation }) {
    return (
        // <Navbar>
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.75}
            >
                <Image
                    source={require("../../assets/images/avatar.jpg")}
                    style={styles.image}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
        // </Navbar>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "orange",
        flex: 1,
        backgroundColor: "white",


    },
    item: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 100
    },
    image: {
        marginTop: 30,
        height: "30%",
        width: "80%",
        borderRadius: 100
    }
})