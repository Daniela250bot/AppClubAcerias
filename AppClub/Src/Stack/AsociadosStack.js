import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarAsociados from "../screen/Asociados/ListarAsociados"
import DetalleAsociados from "../screen/Asociados/DetalleAsociados"
import EditarAsociados from "../screen/Asociados/EditarAsociados"

const Stack = createNativeStackNavigator();

export default function PagosStack() {
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
