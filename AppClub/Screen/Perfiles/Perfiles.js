// import { View, Text} from "react-native";
import {useState, useEffect} from "react";
import { View,Text, StyleSheet, ActivityIndicaicator,Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottonComponent  from "../../componentes/BottonComponent";
import api from "../../Src/Servicios/conexion";

export default function Perfil(){
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarPerfil = async() => {
            try{

                const token =await AsyncStorage.getItem("userToken");
                if (!token) {
                    Alert.alert("No se encontro el token de usuario, redirigiendo al loging");
                    return;
                }
                const response = await api.get("/me");
                setUsuario(response.data);
            }catch(error){
                console.error("Error al cargar el perfil:", error);
                 if(error.isAuthErroor || error.shoulRedirectToLogin) {
                    console.log("Error de autenticación manejado por el interceptor,redirigiendo al Login");
                    return;
                 }
                 if(error.response){
                    Alert.alert("Error del servidor ", `Error ${error.response.status}: ${errror.response.data?.message || "Ocurrio un error al cargar el perfil"}`,
                        [
                            {
                                Text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("useToken");
                                }
                            }
                        ]
                    );
                 }else if(error.request){
                    Aler.alert("Error de conexión", "No se pudo conectar al servidor verifica tu conexión a Internet.",
                        [
                            {
                                Text: "OK",
                                 onPress: async () => {
                                     await AsyncStorage.removeItem("useToken");
                                 }
                            }
                        ]
                    );
                 }else {
                    Aler.alert(
                        "error",
                        "Ocurrio en un error inesperado al cargar el perfil.",
                        [
                            {
                                Text: "OK",
                                 onPress: async () => {
                                     await AsyncStorage.removeItem("useToken");
                                 } 
                            }
                        ]
                    );
                 }
            }finally{
                setLoading(false);
            }
        };
        cargarPerfil();
    },[]);


    if (!usuario) {
        return(
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.containerPerfil}></Text>
                <view style={StyleSheet.containerPerfil}>
                        <text style={StyleSheet.errorText}></text>
                </view>
            </View>
        );
    }


    return(
        <View style={StyleSheet.containerPerfil}>
            <Text style={StyleSheet.title}>Perfil de usuario</Text>
            <View Style={StyleSheet.containerPerfil}>
                <Text style={Styles.label}>Nombre: {usuario.user.name || "No disponible"}</Text>
                <Text style={Styles.label}>Correo: {usuario.user.email || "No disponible"}</Text>
            </View>
        </View>
    );
}