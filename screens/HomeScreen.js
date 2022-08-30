import React from "react";
import { useState } from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../shared/Card";
import { globalStyles } from "../shared/globalStyle";

function HomeScreen({ navigation }) {

    const [reviews, setReviews] = useState([
        { 
            title: "Pemrograman di masa depan", 
            rating: 5, 
            body: "Bahasa yang mendominasi dunia pemrograman adalah yang berbasis Java", 
            key: "1" 
        },

        { 
            title: "Robot menggantikan manusia", 
            rating: 4, 
            body: "Seiring dengan pelajaran robotik sudah dimulai sejak usia dini", 
            key: "2" 
        },

        { 
            title: "Paranoid penyakit menular", 
            rating: 3, 
            body: "Apakah seseorang dapat menularkan penyakit paranoid-nya ke orang lain?", 
            key: "3" 
        },        
    ]);

    // const pressHandler = () => {
    //     navigation.navigate("Detail");
    // }

    return (
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText} >Home Screen</Text>
            
            <FlatList 
                data={ reviews }
                renderItem={ ({ item }) => (

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail", {
                            itemID: item.key,
                            itemTitle: item.title,
                            itemBody: item.body,
                            itemRating: item.rating,
                        })}
                    >
                        <Card>
                            <Text style={ globalStyles.bodyText }>{ item.title }</Text>
                        </Card>
                        
                    </TouchableOpacity>

                ) }
            />

            {/* <Button 
                title="Go to detail"
                onPress={ pressHandler }
            >
                Ke detail screen
            </Button> */}
        </View>
    );
}

export default HomeScreen;
