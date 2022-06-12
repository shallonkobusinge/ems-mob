import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { authHeader } from '../utils/auth.header';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function RegisterEmployee() {
    const [employees, setEmployees] = useState([])
    const [formData, setFormData] = useState({})

    const fetchEmployees = async () => {
        const auth = AsyncStorage.getItem("token");
        await axios.get("http://192.168.0.156:5000/api/v1/employess", {
            headers: authHeader()
        })
        console.log(AsyncStorage.getItem("token"));
    }
    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <Navbar>
            <View style={styles.container}>
                <Text style={styles.heading}>Register Employee</Text>
                <View>
                    <RNPickerSelect
                        items={options}



                    />

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