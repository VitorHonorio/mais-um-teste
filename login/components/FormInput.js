import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';


const FormInput = ({ labelValue, placeholderText, ...rest }) => {
  return (


    <View style={styles.teste}>

       <TextInput
         value={labelValue}
         style={styles.input}
         numberOfLines={1}
         placeholder={placeholderText}
         placeholderTextColor="#666"
         {...rest}
       />
     
   </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '90%',
    height: windowHeight / 14,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'PTSans-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  teste: {
    width: 320,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  }

  /* inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  }, */
});