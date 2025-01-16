import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const RestaurantDetailsCard = ({ 
    name, 
    hours, 
    description, 
    address, 
    phone, 
    ratings, 
    image, 
    menus = [], 
    promotions = [], 
    reviews = []
}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.restaurantName}>{name}</Text>
            <Image source={{ uri: image }} style={styles.restaurantImage} />
            <Text style={styles.hours}>Horarios: {hours}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.address}>Dirección: {address}</Text>
            <Text style={styles.phone}>Teléfono: {phone}</Text>
            <Text style={styles.ratings}>Calificación: {ratings} ⭐</Text>

            <Text style={styles.menuTitle}>Menú</Text>
            {menus.map((menu, index) => (
                <View key={index} style={styles.menuContainer}>
                    <Text style={styles.menuName}>{menu.name}</Text>
                    {menu.dishes.map((dish, dishIndex) => (
                        <View key={dishIndex} style={styles.dishCard}>
                            <Text style={styles.dishName}>{dish.name}</Text>
                            <Text style={styles.dishPrice}>${dish.price}</Text>
                            <Text style={styles.dishDescription}>{dish.description}</Text>
                        </View>
                    ))}
                </View>
            ))}
            <Text style={styles.promotionsTitle}>Promociones</Text>
            <View style={styles.promotionsContainer}>
                {promotions.map((promotion, index) => (
                    <View key={index} style={styles.promotionCard}>
                        <Text style={styles.promotionText}>{promotion.title}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.reviewsTitle}>Reseñas</Text>
            {reviews.map((review, index) => (
                <View key={index} style={styles.reviewContainer}>
                    <Text style={styles.reviewUser}>{review.user}</Text>
                    <Text style={styles.reviewComment}>{review.comment}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    restaurantImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    hours: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'justify',
    },
    address: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center',
    },
    phone: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center',
    },
    ratings: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffcc00',
        textAlign: 'center',
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    menuContainer: {
        marginBottom: 15,
    },
    menuName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dishCard: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    dishName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dishPrice: {
        fontSize: 14,
        color: '#1E90FF',
    },
    dishDescription: {
        fontSize: 12,
        color: '#777',
    },
    promotionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    promotionsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    promotionCard: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promotionText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    reviewsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    reviewContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    reviewUser: {
        fontWeight: 'bold',
    },
    reviewComment: {
        color: '#555',
    },
});

export default RestaurantDetailsCard;
