import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FavoriteCard = ({ 
  name, 
  address, 
  image, 
  compact = true, 
  onDelete 
}) => {
  return (
    <LinearGradient 
      colors={['#e0eafc', '#cfdef3']} 
      style={[styles.card, compact && styles.compactCard]}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {address && <Text style={styles.address}>{address}</Text>}
      </View>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={onDelete}
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, 
    position: 'relative',
  },
  compactCard: {
    height: 90,
  },
  image: {
    width: 40,  
    height: 40,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#D8D8D8',
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#224870',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#FF4500',  
    paddingVertical: 10,        
    paddingHorizontal: 15,      
    borderRadius: 15,           
    position: 'absolute',
    bottom: 10,
    right: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,               
  },
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,               
    letterSpacing: 1,
  },
});

export default FavoriteCard;
