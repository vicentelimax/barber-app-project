import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrar from '../screens/entrar/Entrar';
import Registrar from '../screens/registrar/Registrar';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator(); // cria a stack

const StackNav = () => {

    // verifica se o usuario esta logado
    return(
        <Stack.Navigator>
          <Stack.Screen name="Entrar" component={Entrar} />
          <Stack.Screen name="Registrar" component={Registrar} options={{ title: "Cadastro"}} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default StackNav;
