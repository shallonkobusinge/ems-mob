import { View, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import React from 'react'

export default function Select({ options, SelectHandler, name }) {
    return (
        <View>
            <RNPickerSelect
                onValueChange={(value) => SelectHandler(name, value)}
                items={options}

            />
        </View>
    )
}