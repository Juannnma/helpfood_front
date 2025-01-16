import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/DishCardStyles';

const DishCard = ({ dish }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>${dish.price}</Text>
            <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>
    );
};

export default DishCard;
