import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { auth } from '../../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log('Usuário deslogado')
            navigation.navigate('Entrar')

        }) .catch((error) => {
            console.log(error)
        })
    }
    return (
        <View>
            <Text>Home</Text>
            <Button 
                mode="contained" 
                onPress={handleLogOut}>
                Botão de LogOut
            </Button>
        </View>
        
    )
};

export default Home;