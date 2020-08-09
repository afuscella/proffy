import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title='Meus proffys Favoritos' />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}>
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited />
                    )
                })}
            </ScrollView>

        </View>
    )
}

export default Favorites;