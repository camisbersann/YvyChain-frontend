import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#3B5B30",
    },
    title: {
        color: "EED2B8",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Roboto",
    },
    subtitulo: {
        color: "#EED2B8",
        fontSize: 13,
        fontFamily: "Roboto",
        textAlign: "justify",
        margin: 10,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    image: {
        width: 201,
        height: 200,
        margin: 10,
        marginLeft: -1,
        marginTop: -1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    divpequena: {
        backgroundColor: "#EED2B8",
        margin: 10,
        width: 200,
        height: 400,
        borderRadius: 10,
        marginTop: 16,
    },
    divgrande: {
        display: "flex",
        backgroundColor: "#3B5B30",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 20
    },
    textodiv: {
        color: "#3B5B30",
        fontSize: 16,
        fontFamily: "Roboto",
        textAlign: "justify",
        margin: 10,
        textAlign: "left",
    },
    subdiv: {
      
        marginTop: 30,
        padding: 40,
        marginBottom: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    textosubdiv: {
        color: "#000000",
        backgroundColor: "#D9D9D9",
        fontSize: 12,
        fontFamily: "Roboto",
        textAlign: "justify",
        width: 300,
        marginRight: -20,
        height: 120,
        position: "relative",
        zIndex: 0,
        padding: 38,
        borderRadius: 5
    },
    image2: {
        width: 50,
        height: 130,
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: "#EED2B8",
        width: "29%",
        height: 280,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        padding: 20,
        marginTop : 0
    },
});
export default styles;