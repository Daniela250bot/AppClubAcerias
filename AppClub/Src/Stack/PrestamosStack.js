import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarPrestamos from "../Screen/Prestamos/listarPrestamos";
import DetallePrestamos from "../Screen/Prestamos/detallePrestamo";
import EditarPrestamo from "../Screen/Prestamos/editarPrestamo";

const Stack = createNativeStackNavigator();

export default function PrestamosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ListarPrestamos"
                component={ListarPrestamos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetallePrestamos"
                component={DetallePrestamos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditarPrestamo"
                component={EditarPrestamo}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}