import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarPagos from "../../../Screen/Pagos/listarPagos";
import DetallePago from "../../../Screen/Pagos/detallePago";
import EditarPago from "../../../Screen/Pagos/editarPago";

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
