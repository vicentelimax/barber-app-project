// Firebase
import { createUserWithEmailAndPassword, reauthenticateWithCredential } from "firebase/auth"; // autenticacao por email e google
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../services/firebaseConfig';

// React Native
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Folha de Estilos
import styles from './RegistrarStyle';


const Registrar = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordFirst, setPasswordFirst] = useState('');	
    const [nome, setNome] = useState('');
    const navigation = useNavigation();

    const validarSenha = (passwordFirst, password) => {
        // Testa se as senhas são iguais
        if (passwordFirst !== password){
            return{
                isValid: false,
                error: "As senhas precisam ser iguais",
            };
        }
        if (password.length < 6){
            return{
                isValid: false,
                error: "As senhas precisam ter pelo menos 6 digitos",
            };
        }
        if (!/[0-9]/.test(password)){
            return{
                isValid: false,
                error: "As senhas precisam ter números e letras",
            };
        }
        return {
            isValid: true,
            error:null,
        }

    }

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
        // criacao de usuario em credencial
        .then((userCredential) => {

            const user = userCredential.user;
            // retorna o ID automático do firebase
            const uid = userCredential.user.id
            alert('Conta criada com sucesso!')
            navigation.navigate('Entrar')

            // gravar nome e e-mail em documento
            const userDocRef = doc(db, 'usuarios', user.uid);
            setDoc(userDocRef, {
                email: email,
                id: uid,
                nome: nome,
                
            })
            .then(() => {
                console.log("Documento criado com sucesso")
            })
            .catch((error) => {
                console.log("Erro ao criar documento", error)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // tratando o erro de e-mail que já está em uso
            if (errorCode === 'auth/email-already-in-use'){
                alert('O e-mail fornecido já está em uso em outra conta.')
            }
            if (errorCode === 'auth/weak-password'){
                alert('A senha deve ter pelo menos 6 digitos alfanumericos.')
            }
            console.log(errorMessage) // visualizacao de erros
        });
    }
    
    
    
    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Tela de Cadastro</Text>
            <TextInput
                label='Nome'
                mode='outlined'
                value={nome}
                onChangeText={setNome}
            />
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
                value={passwordFirst}
                onChangeText={setPasswordFirst}
                secureTextEntry
            />
            
            <TextInput
                label='Confirme sua Senha'
                mode='outlined'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button 
                mode='contained'
                style={styles.button}
                onPress={handleRegister}>
                Cadastrar        
            </Button>
            <View style={styles.containerText}>
                <Text>Já tem cadastro?</Text>
                <Button mode='text'>Clique para Entrar</Button>
            </View>
            
        </View>
    )
    
};

export default Registrar;