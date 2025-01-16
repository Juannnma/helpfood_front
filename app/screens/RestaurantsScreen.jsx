import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import RestaurantCard from '../components/RestaurantCard';
import { getAllRestaurants, createFavorite, deleteFavorite } from '../services/api';
import styles from '../styles/RestaurantScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { restaurantImages } from '../data/RestaurantsImages';
import { AuthContext } from '../context/AuthContext';

export default function RestaurantScreen() {
    const { user, jwt } = useContext(AuthContext); 
    const [restaurants, setRestaurants] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('Todos');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const userId = user?.id;

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await getAllRestaurants(jwt); 
                setRestaurants(data);
            } catch (error) {
                Alert.alert("Error", "No se pudieron cargar los restaurantes.");
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, [jwt]);

    const toggleFavorite = async (restauranteId) => {
        if (!userId || !restauranteId) return;

        if (favorites.includes(restauranteId)) {
            try {
                await deleteFavorite(userId, restauranteId, jwt); 
                setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== restauranteId));
                Alert.alert("Favorito eliminado", "Restaurante eliminado de favoritos");
            } catch (error) {
                Alert.alert("Error", "No se pudo eliminar el favorito");
            }
        } else {
            try {
                await createFavorite(userId, restauranteId, jwt); 
                setFavorites((prevFavorites) => [...prevFavorites, restauranteId]);
                Alert.alert("Favorito añadido", "Restaurante añadido a favoritos");
            } catch (error) {
                Alert.alert("Error", "No se pudo añadir a favoritos");
            }
        }
    };

    const applyFilter = (filter) => {
        setSelectedFilter(filter);
    };

    const getFilteredRestaurants = () => {
        return restaurants;
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#FF6347" />;
    }

    return (
        <LinearGradient colors={['#1e3c72', '#2a5298']} style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/images/family.jpg')} style={styles.header}>
                <Text style={styles.headerTitle}>Encuentra tu restaurante</Text>
            </ImageBackground>

            <View style={styles.filterContainer}>
                {['Vegetariano', 'Sin Gluten', 'Vegano', 'Saludable'].map((filter) => (
                    <TouchableOpacity
                        key={filter}
                        onPress={() => applyFilter(filter)}
                        style={[styles.filterButton, selectedFilter === filter && styles.activeFilterButton]}
                    >
                        <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilterText]}>
                            {filter}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={getFilteredRestaurants()}
                renderItem={({ item, index }) => (
                    <Animatable.View
                        animation="fadeInUp"
                        duration={500}
                        delay={100}
                        style={[
                            styles.restaurantContainer,
                            index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
                        ]}
                    >
                        <RestaurantCard
                            name={item.name}
                            hours={item.hours}
                            price={item.price}
                            image={restaurantImages[item.name]}
                            isFavorite={favorites.includes(item.id)}
                            onFavoriteToggle={() => toggleFavorite(item.id)}
                            onPress={() => navigation.navigate('RestaurantDetailScreen', { 
                                restaurantId: item.id, 
                                image: restaurantImages[item.name] 
                            })}
                            orientation="vertical"
                        />
                    </Animatable.View>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.list}
            />
        </LinearGradient>
    );
}
