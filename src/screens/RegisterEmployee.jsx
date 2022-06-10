import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
// import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function RegisterEmployee() {
    const [employees, setEmployees] = useState([])
    const [formData, setFormData] = useState({})

    const fetchEmployees = () => {
        const auth = sessionStorage.getItem("token");

    }

    return (
        <Navbar>
            <View style={styles.container}>
                <Text style={styles.heading}>Register Employee</Text>
                <View>
                    <Select
                        options={options}
                        name="user"
                    />
                    <Select
                        options={options}
                        name="department"
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