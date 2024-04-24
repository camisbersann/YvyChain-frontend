import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
    },
    coluna: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    coluna1: {
        width: '45%',
    },
    coluna2: {
        width: '45%',
        marginLeft: 10,
    },
    titulocoluna: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#EED2B8",
        textAlign: 'left',
        marginBottom: 10,
        fontFamily: "Roboto",
    },
    textcoluna: {
        fontSize: 14,
        color: "#EED2B8",
        marginTop: 10,
        fontFamily: "Roboto",
    },
    titulolink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#EED2B8",
        textAlign: 'center',
        marginTop: 20,
        fontFamily: "Roboto",
    },
});
export default styles;