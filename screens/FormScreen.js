import React from "react";
import { 
    StyleSheet,
    Button,
    TextInput,
    View,
    Text 
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string()
        .required()
        .test(
            "is-num-1-5",
            "Rating harus numerik 1 - 5",
            (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0;
            }
        )
});

function FormScreen() {
    return (
        <View style={ globalStyles.container }>
            <Formik 
                initialValues={{
                    title: "",
                    body: "",
                    rating: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={ reviewSchema }
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Review Title"
                            onChangeText={ props.handleChange("title") }
                            value={ props.values.title }
                            onBlur={ props.handleBlur("title") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.title && props.errors.title }
                        </Text>

                        <TextInput 
                            multiline
                            style={ globalStyles.input }
                            placeholder="Review  Body"
                            onChangeText={ props.handleChange("body") }
                            value={ props.values.body }
                            onBlur={ props.handleBlur("body") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.body && props.errors.body }
                        </Text>

                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Rating (1-5)"
                            onChangeText={ props.handleChange("rating") }
                            value={ props.values.rating }
                            onBlur={ props.handleBlur("rating") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.rating && props.errors.rating }
                        </Text>

                        <Button 
                            title="Submit"
                            style={ globalStyles.button }
                            onPress={ props.handleSubmit } 
                        />

                    </View>
                )}
            </Formik>

        </View>
    );
}

export default FormScreen;