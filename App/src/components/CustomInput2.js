import {View, TextInput, StyleSheet, Touchable } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const CustomInput2 = ({ value, setValue, placeholder, secureTextEntry, onPress }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
            <Entypo
                 hide={true}
                 name='magnifying-glass'
                 size={45}
                 style={{ position: "absolute", right: 1 }}
                 onPress={onPress}
                 color="#849376"
                
             />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7EDDB',
        width: '80%',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#616f53',
        borderRadius: 10,
    },
    input: {
        padding: 15,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#849376"
    }
})
 
export default CustomInput2;