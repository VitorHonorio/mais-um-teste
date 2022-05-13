import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTranslation } from 'react-i18next'
import firestore from '@react-native-firebase/firestore'
import { firebase } from "@react-native-firebase/auth";

import Estilo from "../components/Estilo"

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var hora = new Date().getHours();
  var minuto = new Date().getMinutes();
  
  return date + '-' + month + '-' + year + ' ' + hora + ':' + minuto;
}


export function AjudarScreen({ navigation }) {

  const { t } = useTranslation()

  const [description, setDescription] = useState('')


  function feedback() {
    firestore()
      .collection(firebase.auth().currentUser.email)
     // .doc(getCurrentDate())
      .add({
        //create_at: firebase.firestore.FieldValue.serverTimestamp,
        create_at:getCurrentDate(),
        description
      })
      .then(() => Alert.alert("Agradecemos pelo seu feedback", "Mensagem enviada com sucesso!"))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <View style={Estilo.Top}>
        <TouchableOpacity
          title="Main"
          onPress={() => navigation.navigate('Main')}>
          <Icon name='arrow-left' size={30} style={Estilo.seta} />
        </TouchableOpacity>
      </View>

      <View style={Estilo.App}>

        <TextInput style={Estilo.input}
          onChangeText={setDescription} // feedback => { setFeedback(feedback), { setDescription } 
          /* value={feedback} */
          placeholder={t("Placeholder")}
        />

        <TouchableOpacity
          onPress={() => [

            feedback(),
            navigation.navigate('Main')
          ]}>
          <Icon name='send' size={50} style={Estilo.ajuda} />
        </TouchableOpacity>

      </View>
    </>
  );
}