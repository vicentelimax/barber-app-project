import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { signOut } from 'firebase/auth';
import auth from '../services/firebaseConfig';


const Home = () => {

    const handleLogOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error)
        })
    };

    return(
        <View>
            <Text>Log ing executado</Text>
            <Button
                mode="elevated"
                onPress={SignUpPress}
                style = {styles.button}>
                Faça o Log In  
            </Button>
        </View>
    )
}