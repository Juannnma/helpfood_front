import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/RestaurantPresentationCardStyles';

const RestaurantPresentationCard = ({name, description, address, celNumber,openingHours, closingHours,onLocationPress }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.restaurantName}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.infoContainer}>
              
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.text}>{address}</Text>
                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.text}>{celNumber}</Text>
                <Text style={styles.label}>Horario de Apertura:</Text>
                <Text style={styles.text}>{openingHours}</Text>
                <Text style={styles.label}>Horario de Cierre:</Text>
                <Text style={styles.text}>{closingHours}</Text>
            </View>
            <TouchableOpacity style={styles.locationButton} onPress={onLocationPress}>
                <Text style={styles.locationButtonText}>Ubicación</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RestaurantPresentationCard;
