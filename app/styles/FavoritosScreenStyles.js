import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1c3b57', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFF',
        letterSpacing: 1,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 3 },
        textShadowOpacity: 0.4,
        textShadowRadius: 4,
    },
    loadingText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    deleteButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
});

export default styles;
