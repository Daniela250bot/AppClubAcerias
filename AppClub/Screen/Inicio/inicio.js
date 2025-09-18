import {  ScrollView, StatusBar } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CardComponent from "../../componentes/CardComponent";


    export default function Inicio(){
        return(
          <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>BIENVENIDOS</Text>
                <Text style={styles.Subtitle}>Estado <Text style={styles.StatusText}> Habilitado</Text></Text>
                <Text style={styles.Subtitle}>Selecciona una Opcion</Text>
             </View> 
             
         <View style={styles.gridContainer}> 
            <CardComponent
            tittle="Asociados"
            description=" Gestión de Asociados."
            icon="people-outline"
            />
            <CardComponent
            tittle="Actividades"
            description=" Gestión de Actividades."
            icon="calendar-outline"
            />
            <CardComponent
            tittle="Prestamos"
            description=" Gestión de Prestamos."
            icon="cash-outline"
            />
            <CardComponent
            tittle="Pagos"
            description=" Gestión de pagos."
            icon="card-outline"
            />


         </View>
        </ScrollView>
        )
    }
