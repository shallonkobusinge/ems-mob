import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { authHeader } from '../utils/auth.header';
import Select from '../components/Select';
import { BASE_URL } from '../utils/BASE_URL';
import ButtonComponent from '../components/Button';


export default function RegisterEmployee() {
    const [employees, setEmployees] = useState([])
    const [formData, setFormData] = useState({})
    const [key, setKey] = useState("");
    const [options, setOptions] = useState([])
    const departmentOptions = [
        { value: "IT", label: "IT" },
        { value: "HR", label: "HR" },
        { value: "Finance", label: "Finance" },
    ]

    const token = JSON.parse(key);


    const fetchEmployees = async () => {
        const auth = await AsyncStorage.getItem("token");
        const token = JSON.parse(auth);
        setKey(auth);
        axios.get("http://192.168.0.220:5000/api/v1/users", {
            headers: {
                'authorization': `${token}`
            }
        }).then((response) => {
            setEmployees(response.data.data.docs)



        }).catch((error) => {
            console.log(error);
        })

    }

    const renderEmployees = () => {
        let employeesRender = []
        for (let employee of employees) {
            const data = {
                label: `${employee.fname}  ${employee.lname}`,
                value: employee._id
            }
            employeesRender.push(data)
        }
        return employeesRender;
    }

    const SelectHandler = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        axios.post("http://192.168.0.220:5000/api/v1/employees", formData, {
            headers: {
                'authorization': `${token}`
            }
        }).then((response) => {
            Alert("Employee Registered Successfully");
        }).catch((error) => {
            Alert("Error occured")
        })
    }
    useEffect(() => {
        fetchEmployees();
        setOptions(renderEmployees());
    }, [employees])

    return (
        <Navbar>
            <View style={styles.container}>
                <Text style={styles.heading}>Register Employee</Text>
                <View>
                    <View style={styles.select}>
                        <Select
                            options={options}
                            SelectHandler={SelectHandler}
                            name="user"
                            label="Select the user"
                        />
                    </View>
                    <View style={styles.select}>
                        <Select
                            options={departmentOptions}
                            SelectHandler={SelectHandler}
                            name="department"
                            label="Select the department"
                        />
                    </View>
                </View>
                <ButtonComponent
                    SubmitData={handleSubmit}
                    title="Register Employee"
                />
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
    select: {
        marginTop: 30
    },

})