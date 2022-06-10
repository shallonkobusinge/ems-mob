import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'

export default function Register() {
    const [formData, setFormData] = useState({});


    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {

    }

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
                        name="fname"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Last Name"
                        name="lname"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Email"
                        name="email"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Phone"
                        name="phone"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Username"
                        name="username"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Password"
                        name="password"
                        InputHandler={handleInput}

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