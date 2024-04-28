import { View, StyleSheet, KeyboardAvoidingView,ImageBackground } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase-config'
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
    
    const [textUser, setTextUser] = useState("")
    const [textPassword, setTextPassword] = useState("")
    
    const navigation = useNavigation();

    const SignUpPress = () => {
        navigation.navigate('SignUp'); // realiza a navegação
    };

    const forgotPasswordPress = () => {
        navigation.navigate('ForgotPassword')
    }
    
    return(
        
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="height">
                <Card style={styles.card}>
                    <Card.Cover
                        source={ require("../../assets/kratos.png") }
                        style={styles.logo}
                    />                
                    <Card.Title 
                        title="Barber Shop App" 
                        subtitle="Agende seu serviço"
                        style={styles.title}
                    />
                    <TextInput
                        label="Email"
                        value={textUser}
                        onChangeText={textUser => setTextUser(textUser)}
                        style={styles.textinput}
                    />
                    <TextInput
                        label="Senha"
                        secureTextEntry={true}
                        value={textPassword}
                        onChageText={textPassword => setTextPassword(textPassword)}
                        right={<TextInput.Icon icon="eye" />}
                    />
                    <Button
                        mode="contained"
                        onPress={() => console.log('Pressed')}
                        style = {styles.button}>
                        Entrar  
                    </Button>
                    <Button
                        mode="elevated"
                        onPress={SignUpPress}
                        style = {styles.button}>
                        Registrar-se  
                    </Button>
                    <Button
                        mode='text'
                        style= {styles.button}
                        onPress= {forgotPasswordPress} >
                        Esqueci minha senha
                    </Button>
                </Card>
            </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex:1,
        height:'100%',
        justifyContent:'center',
    },
    card: {
        padding:'5%',
        backgroundColor:'#FCFCFC',
        margin:'7%',
        height:'90%'
    },
    textinput: {
        padding: 8,
        borderRadius: 8,
    },
    logo: {
        height:'45%',
    },
    title: {
        alignContent: 'center',
        fontSize: 40,
        textAlign: 'center',
    },
    button: {
        marginTop: 15,
    },
});

export default LogIn;