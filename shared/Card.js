import React from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "./globalStyle";

function Card(props) {
    return (
        <View style={ globalStyles.card }>
            <View style={ globalStyles.cardContent }>
                { props.children }
            </View>
        </View>
    );

}

export default Card;