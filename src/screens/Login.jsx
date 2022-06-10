import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {
    return (
        <Navbar>
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <View>

                    <Input
                        label="username"

                    />
                    <Input
                        label="Password"

                    />

                    <Button />
                </View>
            </View>
        </Navbar>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: "auto",
        marginRight: "auto",

    },
    heading: {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 25,
        fontWeight: "bold",
    }

})