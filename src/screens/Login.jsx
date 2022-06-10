import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Login({ navigation }) {
    const [formData, setFormData] = useState({});
    const handleInput = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData);
    }

    const handleSubmit = () => {
        axios.post("http://192.168.0.96:5000/api/v1/users/login", formData)
            .then((response) => {
                toast.success("Logged in successfully")
                console.log(response);
                navigation.navigate("Home")
            }).catch((error) => {
                toast.error("Couldn't log in'")
            })
    }
    return (
        <Navbar>
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <View>

                    <Input
                        label="username"
                        name="username"
                        InputHandler={handleInput}

                    />
                    <Input
                        label="Password"
                        name="password"
                        InputHandler={handleInput}

                    />

                    <Button
                        SubmitData={handleSubmit}
                        title="Submit"
                    />

                    <View style={styles.redirect}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Register") }}
                            style={styles.touchable}
                        >
                            <Text>Don't have an account ?  </Text>
                            <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                    </View>
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
    },
    redirect: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20

    },
    touchable: {
        display: "flex",
        flexDirection: 'column'
    },
    registerText: {
        color: "#496CE8"
    }

})