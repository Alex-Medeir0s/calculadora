import React, {useState} from "react";

import styles from "./style";
import ResultIMC from "./ResultIMC";

import {View, Text, TextInput, TouchableOpacity} from "react-native";


export default function Form(){
    //Seção dos códigos
    
    //declaração de variáveis básicas para o calculo do IMC
    const[altura, setAltura] = useState(null);
    const[peso, setPeso] = useState(null);

    //declaração de variáveis de apoio para o funcionamento da rotina da tela
    const[msgIMC, setMsgIMC] = useState("Digite o peso e a altura");
    const[vlrIMC, setVlrIMC] = useState(null);
    const[textButton, setTextButton] = useState("Calcular")

    //Função que calcula o IMC
    function calcularIMC(){

        if(peso!=null && altura!=null){
            
            setVlrIMC((peso/(altura*altura)).toFixed(2))

            setAltura(null)
            setPeso(null)
            setMsgIMC("Seu IMC é: ")
            setTextButton("Calcular")

            return
        }else{
            setVlrIMC(null)
            setTextButton("Calcular")
            setMsgIMC("Digite o peso e a altura")
        }
    }


    //Seção principal, que monta a tela
    return (

        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>
                    Altura
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setAltura}
                    value={altura}
                />

                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 75"
                    keyboardType="numeric"
                    onChangeText={setPeso}
                    value={peso}
                />

                <TouchableOpacity style={styles.button}
                    onPress={()=> {calcularIMC() }} 
                >
                    <Text style={styles.textButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>

            </View>

                <ResultIMC msgResultIMC={msgIMC} vlrResultIMC={vlrIMC} />


        </View>

    );
}