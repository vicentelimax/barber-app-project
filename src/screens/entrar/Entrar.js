import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';

import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from './EntrarStyle';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const provider = new GoogleAuthProvider();

const Entrar = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const goToRegisterScreen = () => {
        navigation.navigate('Registrar')
    }

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    };
  

    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Tela de LogIn</Text>
            <TextInput
                label='Email'
                mode='outlined'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                label='Senha'
                mode='outlined'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button 
                mode='contained'
                style={styles.button}
                onPress={handleLogIn}>
                Entrar        
            </Button>
            <Text>Ainda não tem uma conta?</Text>
            <Button
                mode='elevated'
                style={styles.button}
                onPress={goToRegisterScreen}>
                Faça seu Cadastro!
            </Button>
            
        </View>
    )
    
};

export default Entrar;