import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import EmoticonIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Estilo from '../components/Estilo';
import { AuthContext } from '../login/navigation/AuthProvider'
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'

/* const user = firebase.auth().currentUser

const usuario = user.email 
console.warn("Bem-vindo " + usuario)*/

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    const usuario = user.email
    console.warn("Bem-vindo " + usuario)
  }
})

const getCurrentDate=()=>{
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var hora = new Date().getHours();
  var minuto = new Date().getMinutes();
  
  return date + '-' + month + '-' + year + ' ' + hora + ':' + minuto;
}


function feedback(title) {
  firestore()
    .collection(firebase.auth().currentUser.email)
   // .doc(getCurrentDate())
    .add({
      status: title, 
      user: firebase.auth().currentUser.email,
      //create_at: firebase.firestore.FieldValue.serverTimestamp
      create_at: getCurrentDate()
    })
    .catch((error) => console.log(error))
}


export function MainScreen({ navigation }) {

  const { t } = useTranslation()
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={Estilo.App}>

      <Image style={Estilo.logo} source={require("../assets/imagens/logo.png")} />

      <Text style={Estilo.titlefont}>{t("MainScreen")}</Text>

      <View style={Estilo.container}>
        <TouchableOpacity
          title="Pleno"
          onPress={() => [feedback("Pleno"), navigation.navigate('Pleno')] }>
          <EmoticonIcon name='emoticon-cool-outline' size={70} style={Estilo.plenoemoticon} />
        </TouchableOpacity>

        <TouchableOpacity
          title="Feliz"
          onPress={() => [feedback("Feliz"), navigation.navigate('Feliz')]}>
          <EmoticonIcon name='emoticon-outline' size={70} style={Estilo.felizemoticon} />
        </TouchableOpacity>

        <TouchableOpacity
          title="Neutro"
          onPress={() => [feedback("Neutro"), navigation.navigate('Neutro')]}>
          <EmoticonIcon name='emoticon-neutral-outline' size={70} style={Estilo.neutroemoticon} />
        </TouchableOpacity>

        <TouchableOpacity
          title="Triste"
          onPress={() => [feedback("Triste"), navigation.navigate('Triste')]}>
          <EmoticonIcon name='emoticon-sad-outline' size={70} style={Estilo.tristeemoticon} />
        </TouchableOpacity>

        <TouchableOpacity
          title="Péssimo"
          onPress={() => [feedback("Péssimo"), navigation.navigate('Pessimo')]}>
          <EmoticonIcon name='emoticon-dead-outline' size={70} style={Estilo.pessimoemoticon} />
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        title="Arquivo"
        onPress={() => navigation.navigate('ArquivoFeedback')
        }>
        <EmoticonIcon name='book-open' style={Estilo.historico} size={30} />
      </TouchableOpacity>

      {/* <TouchableOpacity title="Arquivo" onPress={() => navigation.navigate('LoginScreen') }> </TouchableOpacity> */}
      <EmoticonIcon name='logout' style={Estilo.logout} size={30} onPress={() => logout()} />



    </SafeAreaView>

  );
}