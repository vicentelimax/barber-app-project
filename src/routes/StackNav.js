import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import Entrar from '../screens/entrar/Entrar';
import Registrar from '../screens/registrar/Registrar';
import Home from '../screens/home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator(); // cria a stack

const StackNav = () => {

  const [initial, setInitial] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      setInitial(value)
    })
  }, [])

    // verifica se o usuario esta logado
    return(
        <Stack.Navigator initialRouteName={initial ? 'Home' : 'Entrar'}>
          <Stack.Screen name="Entrar" component={Entrar} />
          <Stack.Screen name="Registrar" component={Registrar} options={{ title: "Cadastro"}} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default StackNav;
