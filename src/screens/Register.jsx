import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Register() {
    return (
        <Navbar>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <Text style={styles.heading}>Register</Text>
                <View>

                    <Input
                        label="First Name"

                    />
                    <Input
                        label="Last Name"

                    />
                    <Input
                        label="Email"

                    />
                    <Input
                        label="Phone"

                    />
                    <Input
                        label="Username"

                    />
                    <Input
                        label="Password"

                    />

                    <Button />
                </View>
            </ScrollView>
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