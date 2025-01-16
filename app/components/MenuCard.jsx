import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/MenuCardStyles';
import DishCard from './DishCard';

const MenuCard = ({ menus }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.menuTitle}>Menú</Text>
            {menus.map((menu, index) => (
                <View key={index} style={styles.menuContainer}>
                    <Text style={styles.menuName}>{menu.name}</Text>
                    {menu.dishes.map((dish, dishIndex) => (
                        <DishCard key={dishIndex} dish={dish} />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default MenuCard;
