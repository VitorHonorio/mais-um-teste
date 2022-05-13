import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import FormButton from '../login/components/FormButton';
import { AuthContext } from '../login/navigation/AuthProvider';
import Estilo from '../components/Estilo';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);
  const { t } = useTranslation()

  function validateEmail(email) {
    const expression = /(\W|^)[\w.\-]{0,25}@(fitec)\.org.br$/
    return expression.test(String(email).toLowerCase())
  }

  const salvar = () => {
    if (validateEmail(email)) {
      register(email, password)
      Alert.alert("Cadastro", "Usuário cadastrado com sucesso")
    } else {
      Alert.alert("Email incorreto", "Digite um email válido")
    }
  }


  return (
    <SafeAreaView style={Estilo.App}>

      <Image source={require("../assets/imagens/logo.png")} style={Estilo.logoLogin} />

      <Text style={styles.cadastro}>{t("Cadastro")}</Text>

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

      {/* <TextInput
        style={Estilo.inputEmail}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText={t("Email")}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={Estilo.inputSenha}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText={t("Senha")}
        iconType="lock"
        secureTextEntry={true}
      /> */}

      <FormButton
        buttonTitle={t("Cadastrar")}
        onPress={() => salvar()}
      />

      {/*<View>
        
        <SocialButton
          buttonTitle="Sign Up with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
      </View> */}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}> {t("Voltar tela de login")}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCFCFC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: "#FFF",
    fontFamily: 'PTSans-Regular',
  },
  cadastro: {
    fontSize: 32,
    color: 'white',
    textAlign: "center",
    fontFamily: 'PTSans-Bold',
    marginBottom: 80
  }
});