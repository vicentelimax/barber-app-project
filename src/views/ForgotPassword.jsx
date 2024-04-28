import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput, Dialog, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';



const ForgotPassword = () => {

    const [textUser, setTextUser] = useState("");
    const navigation = useNavigation();

    //const forgotPasswordPress = () => {
    //    navigation.navigate('LogIn');
    //};

    const [visible, setVisible] = useState(false);
    const hideDialog = () => {
        visible == true ? setVisible(false) : setVisible(true)
    };

    return(
        <View>
            <KeyboardAvoidingView behavior='height'>
                <Text variant="displayMedium">Recuperação de Senha</Text>
                <TextInput
                    label="Email"
                    value={textUser}
                    onChangeText={textUser => setTextUser(textUser)}
                    style={styles.textinput}
                />
                <Button
                    mode="contained"
                    onPress={hideDialog}
                    style={styles.button}>
                    Recuperar Senha  
                </Button>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Verifique sua caixa de entrada.</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium"> Um e-mail de recuperação de senha foi enviado para o e-mail informado.</Text>
                        <Button
                            mode="contained"
                            style={styles.button}
                            onPress={hideDialog}>
                            Ok
                        </Button>
                    </Dialog.Content>
                </Dialog>
            </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    textinput: {
        padding: 8,
        borderRadius: 8,
    },
    button: {
        marginTop: 15,
    },
});

export default ForgotPassword;