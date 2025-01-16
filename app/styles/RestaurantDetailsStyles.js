import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    
    presentationCard: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
        alignItems: 'center',
    },
    restaurantImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 15,
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#777',
        textAlign: 'justify',
        marginBottom: 15,
    },
    infoContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    text: {
        fontSize: 15,
        color: '#555',
    },
    locationButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    locationButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Estilos para la tarjeta de menú
    menuCard: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    menuTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    menuContainer: {
        marginBottom: 20,
    },
    menuName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    // Estilos para la tarjeta de cada plato
    dishCard: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    dishName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    dishPrice: {
        fontSize: 16,
        color: '#1E90FF',
        marginVertical: 5,
    },
    dishDescription: {
        fontSize: 14,
        color: '#777',
        lineHeight: 18,
    },

    // Estilos para las promociones y reseñas si decides incluirlas en el futuro
    promotionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    promotionCard: {
        width: 120,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
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
        color: '#333',
        textAlign: 'center',
    },
    reviewItemContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    reviewUser: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewComment: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
    },
});

export default styles;
