import React from 'react';

import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImage}
                resizeMode='contain'
                style={styles.content}>

                <Text style={styles.title}>
                    Zonatto toca meu som!
                </Text>
                <Text style={styles.description}>
                    Quer pedir um som pra tocar aqui no tarde rock? {'\n'}Então clica logo ai embaixo meu!
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <FontAwesome name="whatsapp" style={styles.okButtonIcon} />
                <Text style={styles.okButtonText}>
                    Chama no zap
                </Text>
            </RectButton>
            <Text style={styles.subTitle}>
                De segunda a sexta-feira das 14:00 as 16:00
            </Text>
        </View>
    );
}

export default GiveClasses;