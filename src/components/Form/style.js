import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#E3F2FD", // Azul claro
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },

    formLabel: {
        color: "#0D47A1", // Azul escuro para contraste
        fontSize: 18,
        paddingLeft: 20
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        height: 40,
        margin: 12,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#64B5F6"
    },

    textButton: {
        fontSize: 20,
        color: "#FFFFFF"
    },

    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#1976D2", // Azul médio
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },

});

export default styles;
