import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  const { logout, isAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    props.navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.header}>
        <Ionicons name="restaurant-outline" size={50} color="#FFF" style={styles.logoIcon} />
        <Text style={styles.headerText}>HelpFood</Text>
      </LinearGradient>

      <View style={styles.itemListContainer}>
        <DrawerItemList {...props} />
      </View>

      {isAuthenticated && (
        <LinearGradient colors={['#FF6347', '#FF4500']} style={styles.logoutButton}>
          <DrawerItem
            label="Cerrar Sesión"
            onPress={handleLogout}
            labelStyle={styles.logoutLabel}
            icon={({ color, size }) => (
              <Ionicons name="exit-outline" size={24} color="#FFF" />
            )}
          />
        </LinearGradient>
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  header: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 15,
  },
  logoIcon: {
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowOpacity: 0.3,
    textShadowRadius: 4,
  },
  itemListContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  logoutButton: {
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  logoutLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
