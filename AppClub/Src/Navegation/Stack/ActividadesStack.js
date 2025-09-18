import { createNativeStackNavigator }   from "@react-navigation/native-stack";
import ListarActividades from "../../../Screen/Actividades/listarActividades";
import DetalleActividad from "../../../Screen/Actividades/detalleActividad";
import EditarActividad from "../../../Screen/Actividades/editarActividad";

const Stack = createNativeStackNavigator();

export default function ActividadesStack() {
    return ( 
        <Stack.Navigator> 
            <Stack.Screen
            name="ListarActividades"
            component= {ListarActividades}
            options={{ title: "Actividades"}}
            />
            <Stack.Screen
            name="DetalleActividad"
            component= {DetalleActividad}
            options={{ title: "DetalleActividad"}}
            />
            <Stack.Screen
            name="EditarActividades"
            component= {EditarActividad}
            options={{ title: "EditarActividades"}}
            />
        </Stack.Navigator>
    )
}