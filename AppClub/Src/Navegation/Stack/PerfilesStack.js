import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Configuracion from "../../../Screen/Configuracion/Configuracion";
import Perfil from "../../../Screen/Perfiles/Perfiles"

const Stack = createNativeStackNavigator();

export default function ConfiguracionesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConfiguracionPantalla"
        component={Configuracion}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}