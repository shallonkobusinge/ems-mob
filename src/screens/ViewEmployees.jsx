import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import authHeader from '../utils/auth.header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function ViewEmployees() {
    const [employees, setEmployees] = useState([]);



    const fetchEmployees = async () => {
        const token = await AsyncStorage.getItem("token")
        const auth = token.split('"').join('')
        axios.get("http://192.168.0.220:5000/api/v1/users", {
            headers: {
                'authorization': `${auth}`
            }
        }).then((response) => {
            setEmployees(response.data.data.docs)
        }).catch((error) => {

        })
    }
    useEffect(() => {
        fetchEmployees()
    }, [employees])

    return (
        <Navbar>
            <ScrollView style={styles.container}>
                {employees.map((item, index) => (
                    <>
                        <View style={styles.main}>
                            <Text>First Name</Text>
                            <Text>{item.fname}</Text>
                        </View>
                        <View style={styles.main}>
                            <Text>Last Name</Text>
                            <Text>{item.lname}</Text>
                        </View>
                        <View style={styles.main}>
                            <Text>Email</Text>
                            <Text>{item.email}</Text>
                        </View>
                        <View style={styles.main}>
                            <Text>Phone</Text>
                            <Text>{item.phone}</Text>
                        </View>
                        <View style={styles.main}>
                            <Text>Is Admin</Text>
                            <Text>{item.isAdmin}</Text>
                        </View>
                    </>
                ))}

            </ScrollView>
        </Navbar>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        flex: 1,
        borderRadius: 30,
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",

        paddingTop: 8,
        textAlign: 'justify',
        backgroundColor: "orange",
        width: 370,
        height: 120,

    }
})