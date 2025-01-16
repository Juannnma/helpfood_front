import React from 'react';
import { View, Text, Modal, Button, ScrollView, TouchableHighlight } from 'react-native';
import styles from '../styles/MenuModalStyles';

const MenuModal = ({ selectedRestaurant, modalVisible, closeMenu }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeMenu}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Menú de {selectedRestaurant.name}</Text>
          <ScrollView style={styles.scrollView}>
            <TouchableHighlight style={styles.menuButton} underlayColor="#007BFF" onPress={() => {}}>
              <Text style={styles.menuButtonText}>Platos para Celíacos</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuButton} underlayColor="#007BFF" onPress={() => {}}>
              <Text style={styles.menuButtonText}>Platos Veganos</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuButton} underlayColor="#007BFF" onPress={() => {}}>
              <Text style={styles.menuButtonText}>Platos Vegetarianos</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuButton} underlayColor="#007BFF" onPress={() => {}}>
              <Text style={styles.menuButtonText}>Platos de la semana</Text>
            </TouchableHighlight>
            {/* Agrega más opciones de menú aquí */}
          </ScrollView>
          <Button title="Cerrar" onPress={closeMenu} color="#FF5A5F" />
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;
