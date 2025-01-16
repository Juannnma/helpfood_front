import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SupportScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:mjuammartin@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('https://wa.me/2604585110');
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.gradientBackground} />
      
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Soporte Técnico HelpFood</Text>
        <Text style={styles.info}>
          Si necesitas ayuda o tienes alguna pregunta, no dudes en contactarnos:
        </Text>

        <TouchableOpacity style={styles.contactContainer} onPress={handleEmailPress}>
          <Ionicons name="mail-outline" size={28} color="#FF6347" />
          <Text style={styles.contact}>mjuammartin@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactContainer} onPress={handlePhonePress}>
          <Ionicons name="call-outline" size={28} color="#FF6347" />
          <Text style={styles.contact}>2604585110</Text>
        </TouchableOpacity>

        <Text style={styles.info}>
          Próximamente también podrás encontrarnos en nuestro sitio web.
        </Text>
        <Text style={styles.info}>¡Gracias por contactarnos!</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 3 },
    textShadowOpacity: 0.4,
    textShadowRadius: 4,
  },
  info: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 15,
    lineHeight: 26,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    justifyContent: 'center',
  },
  contact: {
    fontSize: 18,
    color: '#FF6347',
    marginLeft: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});


