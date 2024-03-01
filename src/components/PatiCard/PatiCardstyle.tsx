import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
        bigTitle:{
            fontSize:35,
            marginLeft:20,
            marginTop:10,
            paddingBottom:10,
            color:"purple",
            fontWeight:"bold"
        },
        container:{
            backgroundColor:"#dcdcdc",
            marginBottom:5,
            marginRight:10,
            width:Dimensions.get('window').width /2.05
        },
        textInput:{},
        imageView:{
            borderRadius:10,
            padding:1,
            paddingBottom:1,
            backgroundColor:"white"
        },
        image:{
            height: Dimensions.get('window').height /4,
            resizeMode:"center",
            padding:50
        },
        patiTitle:{
            fontWeight:"bold",
            marginLeft:10,
            marginRight:10,
            marginTop:1
        },
        patiPrice:{
            fontWeight:"bold"
        },
        ImageContainer:{
            backgroundColor:"grey",
            borderRadius:10
        },
        input:{
            
        }
    }
)