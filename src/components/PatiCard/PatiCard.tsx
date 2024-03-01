import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './PatiCardstyle';

const PatiCard = ({pati}) => {
    return(
        <View style= {styles.container}>
           <View style={styles.ImageContainer}>
            <View style={styles.imageView}>
                    <Image style={styles.image}
                        source={{uri:pati.imgURL}}
                    />
                </View>
            </View>
            <Text style= {styles.patiTitle}>{pati.title}</Text>
            <Text style= {styles.patiPrice}>{pati.price}</Text>
        </View>
    )
}

export default PatiCard;
