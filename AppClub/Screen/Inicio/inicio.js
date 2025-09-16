import {  ScrollView, StatusBar } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CardComponents from "../../components/CardComponents";


    export default function Inicio(){
        return(
          <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>BIENVENIDOS</Text>
                <Text style={styles.Subtitle}>Estado <Text style={styles.StatusText}> Habilitado</Text></Text>
                <Text style={styles.Subtitle}>Selecciona una Opcion</Text>
             </View> 
             
         <View style={styles.gridContainer}> 
            <CardComponents
            tittle="Asociados"
            description=" Gestión de Asociados."
            icon="people-outline"
            />
            <CardComponents
            tittle="Actividades"
            description=" Gestión de Actividades."
            icon="calendar-outline"
            />
            <CardComponents
            tittle="Prestamos"
            description=" Gestión de Prestamos."
            icon="cash-outline"
            />
            <CardComponents
            tittle="Pagos"
            description=" Gestión de pagos."
            icon="card-outline"
            />


         </View>
        </ScrollView>
        )
    }