import React from "react";
import { useState } from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity,
    ImageBackground,
    Modal
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../shared/Card";
import { globalStyles } from "../shared/globalStyle";
import { MaterialIcons } from "@expo/vector-icons";
import FormScreen from "./FormScreen";

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

    const [modalOpen, setModalOpen] = useState(false);

    return (

        <ImageBackground
            source={ require("../assets/review-background.png") }
            resizeMode="cover"
            style={ globalStyles.backImage} 
        >
            <View style={ globalStyles.container }>

                <Modal
                    visible={ modalOpen }
                    style={{}}
                >

                    <View style={ globalStyles.modalContent }>

                        <MaterialIcons 
                            name="close"
                            size={ 24 }
                            onPress={() => setModalOpen(false)}
                            style={ globalStyles.modalToggle }
                        />

                        <Text style={ globalStyles.titleText }>
                            Add your review here
                        </Text>

                        {/* Form input data review */}
                        <FormScreen />

                    </View>

                </Modal>

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

                <MaterialIcons 
                    name="add"
                    size={ 24 }
                    onPress={() => setModalOpen(true)}
                    style={ globalStyles.modalToggle }
                />

                {/* <Button 
                    title="Go to detail"
                    onPress={ pressHandler }
                >
                    Ke detail screen
                </Button> */}
            </View>

        </ImageBackground>

    );
}

export default HomeScreen;
