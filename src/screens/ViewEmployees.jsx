import { View, Text } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import authHeader from '../utils/auth.header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ViewEmployees() {
    const [employees, setEmployees] = useState({});

    const token = AsyncStorage.getItem("token")

    const fetchEmployees = () => {
        axios.get("http://192.168.0.220:5000/api/v1/employees", {
            headers: {
                'authorization': `${token}`
            }
        }).then((response) => {
            setEmployees(response.data.data)
        }).catch((error) => {

        })
    }

    return (
        <View>
            <Text>ViewEmployees</Text>
        </View>
    )
}