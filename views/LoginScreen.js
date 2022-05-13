import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Platform, StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FormButton from '../login/components/FormButton';
import { AuthContext } from '../login/navigation/AuthProvider';
import Estilo from '../components/Estilo';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(AuthContext);
  const { t } = useTranslation()

  function validateEmail(email) {
    const expression = /(\W|^)[\w.\-]{0,25}@(fitec)\.org.br$/
    return expression.test(String(email).toLowerCase())
  }

  const salvar = () => {
    if (validateEmail(email)) {
      login(email, password)

    } else {
      alert("Email incorreto")
    }
  }

  return (
    <KeyboardAvoidingView style={Estilo.App}>

      <Image source={require("../assets/imagens/logo.png")} style={Estilo.logoLogin} />


      <TextInput
        style={Estilo.inputEmail}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder={t("Email")}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={Estilo.inputSenha}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder={t("Senha")}
        iconType="lock"
        secureTextEntry={true}
      />



      {/* <FormInput
    labelValue={email}
    onChangeText={(userEmail) => setEmail(userEmail)}
    placeholderText={t("Email")}
    iconType="user"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
  />

  <FormInput
    labelValue={password}
    onChangeText={(userPassword) => setPassword(userPassword)}
    placeholderText={t("Senha")}
    iconType="lock"
    secureTextEntry={true}
  /> */}

      <FormButton
        buttonTitle={t("Acessar")}
        onPress={() => { salvar() }}
      />

      <Text />

      {/* <TouchableOpacity
  style={styles.btnForgoPassWord} >
  <Text style={styles.ForgoText}>{t("Esqueci a Senha")}</Text>
  </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.ForgoText}>{t("Criar conta")}</Text>
        <Icon name='user-plus' size={20} style={Estilo.iconUsuario} />
      </TouchableOpacity>

  
    </KeyboardAvoidingView>


  );
}

export default LoginScreen;

const styles = StyleSheet.create({

  /*  btnForgoPassWord: {
     marginTop: 30,
   }, */

  ForgoText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: 'PTSans-Regular',
  }
});