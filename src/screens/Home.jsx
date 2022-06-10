import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'


export default function Home({ navigation }) {
    return (

        <View style={styles.container}>
            <View
                style={styles.item}

            >
                <Image
                    source={require("../../assets/images/avatar.jpg")}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
            <View
                style={styles.selection}
            >
                <Text style={styles.optionText}>Select your option</Text>

                <TouchableOpacity
                    style={styles.selectionText}
                    onPress={() => { navigation.navigate("Login") }}
                >
                    <Text
                        style={styles.employeesText}
                    >View Employees</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.selectionText}

                    onPress={() => { navigation.navigate("Register") }}
                >
                    <Text
                        style={styles.employeesText}
                    >Add Employee</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        flex: 1,


    },
    item: {
        alignItems: "center",
        justifyContent: "center",

    },
    optionText: {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        paddingBottom: 20
    },
    selection: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: -90
    },
    image: {
        marginTop: 30,
        height: "45%",
        width: "80%",
        borderRadius: 100
    },
    selectionText: {
        width: "50%",
        height: "18%",
        marginTop: 10,
        backgroundColor: "#EEF2FF"
    },
    employeesText: {
        textAlign: "center",
        marginTop: 14,
    }
})