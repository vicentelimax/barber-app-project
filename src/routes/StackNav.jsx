import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importacao das telas
import LogIn from '../views/LogIn';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
};

export default StackNav;
