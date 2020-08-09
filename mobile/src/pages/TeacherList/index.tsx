import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from "react-native";
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';


function TeacherList() {

    const [isFilterVisible, setFilterVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<Number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => { return teacher.id })
                setFavorites(favoritedTeachersId);
            }
        });
    }

    useEffect(() => {
        loadFavorites();
    })

    function handleToggleFilterVisible() {
        setFilterVisible(!isFilterVisible);
    }

    async function handlerFilterSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title='Proffys Disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color='#fff' />
                    </BorderlessButton>
                )}>

                {isFilterVisible && (

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder='Qual a matéria?'
                            placeholderTextColor='#c1bccc'>
                        </TextInput>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#c1bccc'>
                                </TextInput>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder='Qual o horário?'
                                    placeholderTextColor='#c1bccc'>
                                </TextInput>
                            </View>
                        </View>

                        <RectButton
                            style={styles.submitButton}
                            onPress={handlerFilterSubmit}>
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}>

                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} />
                    )
                })}

            </ScrollView>
        </View>
    );
}

export default TeacherList;