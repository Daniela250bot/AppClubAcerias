import { TextInput, Text, View, StyleSheet, Alert } from "react-native";
import BottonComponent from "../../componentes/BottonComponent";
import { useState } from "react";
import { loginUser } from "../../Src/Servicios/AuthService";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await loginUser(email,password); 
      if(result.succes){
        Alert.alert("Éxito","Has iniciado sesión correctamente", [
          {Text: "OK", onPress: () => console.log("Login exitoso, redirigiendo automaticamente....")},
        ]);
      }else {
        Alert.alert("Error de Loging", result.message || "ocurrio un error al iniciar sesion", );
      } 
    } catch (error) {
      console.error("Error inesperado de loging: ", error);
      Alert.alert("Error","Ocurrió un error inesperado al intentar iniciar sesión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Bienvenido a Club Acerías</Text>
      <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!loading}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
      />

      <BottonComponent
        title= "Iniciar Sesión" onPress={handleLogin} disable={!loading}
      />

      <BottonComponent
        title="¿No tienes una cuenta? Regístrate"
        onPress={() => navigation.navigate("Registro")}
        style={{ backgroundColor: "#0D3B66" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0D3B66",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 20,
    color: "#495057",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 15,
    fontSize: 16,
  },
});
