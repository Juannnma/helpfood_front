import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../context/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantsScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SupportScreen from '../screens/SupportScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import RestaurantDetailsScreen from '../screens/RestaurantsDetailsScreen';

const Drawer = createDrawerNavigator();

export default function Routes() {
    const { isAuthenticated } = useAuth();

    console.log("isAuthenticated en Routes.js:", isAuthenticated);

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            {!isAuthenticated ? (
                <>
                    <Drawer.Screen name="Login" component={LoginScreen} />
                    <Drawer.Screen name="SignUp" component={SignUpScreen} />
                </>
            ) : (
                <>
                    <Drawer.Screen name="Restaurantes" component={RestaurantScreen} />
                    <Drawer.Screen name="Favoritos" component={FavoritosScreen} />
                    <Drawer.Screen name="Soporte Tecnico" component={SupportScreen} />
                    <Drawer.Screen name="RestaurantDetailScreen" component={RestaurantDetailsScreen}/>
                </>
            )}
        </Drawer.Navigator>
    );
}
