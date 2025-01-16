import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, ActivityIndicator, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getRestaurantById, createFavorite, deleteFavorite } from '../services/api';
import RestaurantPresentationCard from '../components/RestaurantPresentationCard';
import MenuCard from '../components/MenuCard';
import styles from '../styles/RestaurantDetailsStyles';
import { AuthContext } from '../context/AuthContext';

const RestaurantDetailsScreen = ({ route }) => {
    const { restaurantId, image } = route.params;
    const { user, jwt } = useContext(AuthContext); 
    const userId = user?.id;
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const data = await getRestaurantById(restaurantId, jwt); 
                setRestaurantDetails(data);
                setIsFavorite(data.isFavorite); 
            } catch (error) {
                Alert.alert("Error", "No se pudieron cargar los detalles del restaurante.");
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurantDetails();
    }, [restaurantId, jwt]);

    const toggleFavorite = async () => {
        if (isFavorite) {
            try {
                await deleteFavorite(userId, restaurantId, jwt); 
                setIsFavorite(false);
                Alert.alert("Favorito eliminado", "Restaurante eliminado de favoritos");
            } catch (error) {
                Alert.alert("Error", "No se pudo eliminar el favorito");
            }
        } else {
            try {
                await createFavorite(userId, restaurantId, jwt); 
                setIsFavorite(true);
                Alert.alert("Favorito añadido", "Restaurante añadido a favoritos");
            } catch (error) {
                Alert.alert("Error", "No se pudo añadir a favoritos");
            }
        }
    };

    const handleOpenMaps = () => {
        if (restaurantDetails && restaurantDetails.address) {
            const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantDetails.address)}`;
            Linking.openURL(url).catch(() => Alert.alert("Error", "No se pudo abrir Google Maps"));
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <LinearGradient colors={['#224870', '#b2a4f4', '#224870']} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                {restaurantDetails && (
                    <>
                        <RestaurantPresentationCard
                            name={restaurantDetails.name}
                            description={restaurantDetails.description}
                            address={restaurantDetails.address}
                            celNumber={restaurantDetails.celNumber}
                            openingHours={restaurantDetails.openingHours}
                            closingHours={restaurantDetails.closingHours}
                            isFavorite={isFavorite}
                            onFavoriteToggle={toggleFavorite} 
                            onLocationPress={handleOpenMaps}
                        />
                        <MenuCard menus={restaurantDetails.menus} />
                    </>
                )}
            </ScrollView>
        </LinearGradient>
    );
};

export default RestaurantDetailsScreen;
