import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const RestaurantCard = ({ 
  name, 
  hours, 
  price, 
  image, 
  isFavorite, 
  onFavoriteToggle, 
  onPress, 
  orientation = 'vertical' 
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, isHorizontal ? styles.horizontalCard : styles.verticalCard]}>
      {/* Ícono de favorito en la esquina superior */}
      <TouchableOpacity style={styles.favoriteIcon} onPress={onFavoriteToggle}>
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color={isFavorite ? '#FF6347' : '#bbb'} />
      </TouchableOpacity>
      
      <Image source={image} style={[styles.image, isHorizontal ? styles.horizontalImage : styles.verticalImage]} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hours}>{hours}</Text>
        {price && <Text style={styles.price}>{price}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    margin: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 5,
  },
  horizontalCard: {
    width: 160,
    height: 240,
    alignItems: 'center',
  },
  horizontalImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  hours: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: '600',
  },
  verticalCard: {
    width: '90%',
    height: 220,
    alignSelf: 'center',
  },
  verticalImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
});

export default RestaurantCard;
