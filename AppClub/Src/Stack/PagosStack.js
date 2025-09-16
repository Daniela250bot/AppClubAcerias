import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarPagos from "../screen/Pagos/ListarPagos"
import DetallePago from "../screen/Pagos/DetallePago"
import EditarPago from "../screen/Pagos/EditarPago"

const Stack = createNativeStackNavigator();

export default function PagosStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="ListarPagos"
                    component={ListarPagos}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetallePago"
                    component={DetallePago}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditarPago"
                    component={EditarPago}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
 }
