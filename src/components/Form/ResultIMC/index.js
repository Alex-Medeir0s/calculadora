import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultIMC(props){
    return(

        <View>
            <Text style={styles.textTitle}>
                {props.msgResultIMC}
            </Text>

            <Text style={styles.textTitle}>
                {props.vlrResultIMC}
            </Text>
        </View>

    );
}