import React from 'react';
import { View, Text, Image, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const PromotionCard = ({ item }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.promotionCard, { transform: [{ scale: scaleValue }] }]}>
        <Image source={item.image} style={styles.promotionImage} />
        <Text style={styles.promotionText}>{item.title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  promotionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  promotionImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  promotionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', 
  },
});

export default PromotionCard;
