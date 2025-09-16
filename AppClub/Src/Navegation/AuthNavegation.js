import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screen/Auth/loging";
import Registro from "../../Screen/Auth/registro";

const Stack = createNativeStackNavigator();

export default function AuthNavegation(){
    return(
        <Stack.Navigator> 
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Iniciar Sesion'}}
           />
           
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ title: 'Registro de Usuarios'}}y
           />
        </Stack.Navigator>
    )
}