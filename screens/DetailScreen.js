import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../shared/globalStyle";
import { imageList } from "../shared/imageList";

function DetailScreen({ route, navigation }) {

    // Ekstrak parameter yang diterima
    const { itemTitle, itemRating, itemBody, itemID } = route.params;
    const id = itemID;
    const rating = itemRating;

    return (
        <View style={ globalStyles.container }>

            <Card>
                <Text style={ globalStyles.titleText }>{ itemTitle }</Text>
                <Text style={ globalStyles.bodyText}>{ itemBody }</Text>
                <Text style={ globalStyles.rating }>
                    <Text> Review's Rating: </Text>
                    <Image 
                        style={ globalStyles.ratingImage } 
                        source={ imageList.ratings[rating] }
                    />
                </Text>
            </Card>

        </View>
    );
}

export default DetailScreen;