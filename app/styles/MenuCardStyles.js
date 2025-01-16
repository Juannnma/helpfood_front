import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        backgroundColor: '#1e2a38', 
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 12,
        marginBottom: 30,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2a9d8f',
    },
    menuTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f9fafb',
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
        letterSpacing: 1,
    },
    menuContainer: {
        width: '100%',
    },
    menuName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffbf00', 
        marginBottom: 10,
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
    },
    description: {
        fontSize: 16,
        color: '#d1d1d1',
        textAlign: 'justify',
        marginBottom: 20,
        lineHeight: 24,
        paddingHorizontal: 5,
    },
});

export default styles;
