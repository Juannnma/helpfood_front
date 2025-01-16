import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff', 
        padding: 18,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,

        
        borderWidth: 1,
        borderColor: '#d3d3d3',
    },
    dishName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    dishPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f7a8c', 
        marginVertical: 3,
    },
    dishDescription: {
        fontSize: 14,
        color: '#777777',
        lineHeight: 20,
    },
});

export default styles;
