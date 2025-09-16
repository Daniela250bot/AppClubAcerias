import { createNativeStackNavigator }   from "@react-navigation/native-stack";import Inicio from "../../Screen/Inicio/inicio";
import ActividadesStack from "./ActividadesStack";
import AsociadosStack from "./AsociadosStack";
import PagosStack from "./PagosStack";
import PrestamosStack from "./PrestamosStack";

const Stack = createNativeStackNavigator();
export default function InicioStack() {
    return (
         <Stack.Navigator> 
                    <Stack.Screen
                    name="InicioPantalla"
                    component= {Inicio}
                    options={{ headerShow: false }}
                    />
                    <Stack.Screen
                    name="AsociadosFlow"
                    component= {AsociadosStack}
                    options={{ headerShow: false }}
                    />
                    <Stack.Screen
                    name="ActividadesFlow"
                    component= {ActividadesStack}
                    options={{ headerShow: false }}
                    />
                    <Stack.Screen
                    name="PagosFlow"
                    component= {PagosStack}
                    options={{ headerShow: false }}
                    />
                    <Stack.Screen
                    name="PrestamosFlow"
                    component= {PrestamosStack}
                    options={{ headerShow: false }}
                    />
                </Stack.Navigator>
    )
}