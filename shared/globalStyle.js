import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        height: "auto",
        /* flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center", */
        padding: 24,
    },
    
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
    },

    bodyText: {
        fontSize: 16,
        textAlign: "justify",
        marginVertical: 8,
        color: "#333",
    },

    card: {
        borderColor: "black",
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#FFF",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },

    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },

    rating: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#EEE",
    },

    ratingImage: {
        height: 32,
        width: 160,
        resizeMode: "contain",
    },

    backImage: {
        flex: 1,
        justifyContent: "flex-start",
    },

    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#F2F2F2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },

    modalContent: {
        flex: 1,
    },

    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#F1C40F",
    },

    erroText: {
        color: "crimson",
        textAlign: "right",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
    },

});