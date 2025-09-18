import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarAsociados from "../../../Screen/Asociados/listarAsociados"
import DetalleAsociados from "../../../Screen/Asociados/detalleAsociados"
import EditarAsociados from "../../../Screen/Asociados/editarAsociados"

const Stack = createNativeStackNavigator();

export default function AsociadosStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="ListarAsociados"
                    component={ListarAsociados}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetalleAsociados"
                    component={DetalleAsociados}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditarAsociados"
                    component={EditarAsociados}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
 }
