import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'


export default function Input({
    label,
}) {
    return (
        <View style={styles.container}>

            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30
    },
    label: {
        paddingBottom: 10,
        textTransform: 'capitalize',
    },
    textInput: {
        width: 200,
        height: 45,
        backgroundColor: "#EEF2FF",
        paddingLeft: 10
    }
})