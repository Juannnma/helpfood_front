import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deleteFavorite, getFavoritesWithRestaurantByUserId } from '../services/api';
import styles from '../styles/FavoritosScreenStyles';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import FavoriteCard from '../components/FavoritesCard';

const FavoritosScreen = () => {
    const { user, jwt } = useContext(AuthContext); 
    const userId = user?.id;
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const fetchFavorites = async () => {
        try {
            const userFavorites = await getFavoritesWithRestaurantByUserId(userId, jwt); 
            setFavorites(userFavorites);
        } catch (error) {
            Alert.alert('Error', 'No se pudieron cargar los favoritos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userId) return;
        fetchFavorites();
        const unsubscribe = navigation.addListener('focus', () => {
            fetchFavorites();
        });

        return unsubscribe;
    }, [userId, jwt]);

    const removeFavorite = async (restauranteId, favId) => {
        try {
            await deleteFavorite(userId, restauranteId, jwt); 
            setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== favId));
            Alert.alert("Restaurante eliminado", "Restaurante eliminado con éxito");
        } catch (error) {
            Alert.alert("Error", "No se pudo eliminar el favorito");
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient 
                colors={['#1e3c72', '#2a5298']} 
                style={styles.gradientBackground}
            />
            <Text style={styles.title}>Restaurantes Favoritos</Text>
            {loading ? (
                <Text style={styles.loadingText}>Cargando favoritos...</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <FavoriteCard
                            name={item.restaurant.name}
                            address={item.restaurant.address}
                            compact={true}
                            onDelete={() => removeFavorite(item.restauranteId, item.id)}
                        />
                    )}
                />
            )}
        </View>
    );
};

export default FavoritosScreen;
