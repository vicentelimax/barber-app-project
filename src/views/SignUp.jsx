import { TextInput, Text, Button, HelperText } from 'react-native-paper';
import{ View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {

    const [emailUser, setEmailUser] = useState("");
    const [textPassword, setTextPassword] = useState("");
    const [textPasswordValidate, setTextPasswordValidate] = useState("");
    
    const validatePassword = () => {
        return textPassword.length >= 6 && /[a-zA-Z]/.test(textPassword) && /[0-9]/.test(textPassword);
    };

    const navigation = useNavigation();

    const SignUpPress = () => {
        navigation.navigate('LogIn'); // realiza a navegação
    };

    const validateEmail = () =>{
        return !emailUser.includes("@");
    };

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <Text variant='displaySmall'>Inscreva-se</Text>

                <TextInput
                    label="Nome de Usuário"
                    style={styles.textinput}
                />

                <TextInput
                    label="Email"
                    style={styles.textinput}
                    value={emailUser}
                    onChangeText={(text) => setEmailUser(text)}
                />
                <HelperText 
                    type={validateEmail() ? 'info' : 'error'} 
                    padding='normal'
                    visible>
                    {validateEmail() ? 'Insira um e-mail válido' : 'Email inválido (falta @)'}
                </HelperText>
                <TextInput
                    label="Senha"
                    style={styles.textinput}
                    value={textPassword}
                    onChangeText={(text) => setTextPassword(text)}
                    secureTextEntry
                />
                <HelperText
                    type={validatePassword() ? 'info':'error'}
                    visible>
                    {validatePassword()
                        ? 'Senha Válida'
                        : 'Crie uma senha forte com no mínimo 6 caracteres, contendo letras e números'}
                    
                </HelperText>
                <TextInput
                    label="Confirme sua senha"
                    style={styles.textinput}
                    value={textPasswordValidate}
                />
                <Button
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                    style = {styles.button}>
                    Criar Conta 
                </Button>
                <View style={{ flex: 1}}>
                    <Text>Você já tem uma conta?</Text>
                    <Button
                        mode="elevated"
                        onPress={SignUpPress}
                        style = {styles.button}>
                        Faça o Log In  
                    </Button>
                </View>
                

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: '5%',
        flex:1
    },
    textinput: {
        padding: 5,
    },
    button: {
        marginTop:'6%'
    }


})

export default SignUp;