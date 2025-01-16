
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/RestaurantsData';
import { promotions } from '../data/PromotionsData';
import styles from '../styles/HomeScreenStyles';
import PromotionCard from '../components/Promotions';
import { restaurantImages } from '../data/RestaurantsImages';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Buscando:', searchQuery);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <LinearGradient colors={['#224870', '#b2a4f4', '#224870']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar restaurantes, tipos de comida..."
            placeholderTextColor="black"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bienvenidos a HelpFood!!</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hola. ¿A qué restaurante te gustaría visitar hoy?</Text>
            <FlatList
              data={filteredRestaurants} 
              renderItem={({ item }) => (
                <RestaurantCard
                  name={item.name}
                  hours={item.hours}
                  image={item.image}
                  orientation="horizontal"
                  onPress={() => navigation.navigate('Restaurantes', { 
                    restaurantId: item.id, 
                    image: restaurantImages[item.name] 
                })}
                />
              )}
              keyExtractor={(item) => item.name}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nuestras promos del día para vos!</Text>
            <FlatList
              data={promotions}
              renderItem={({ item }) => <PromotionCard item={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
