import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/LoginScreenStyles';
import { postLogin } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const { login, isAuthenticated } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await postLogin(email, password);
            if (response.token) {
                Alert.alert('Inicio de sesión exitoso');
                await login(response.token, response.userData); 
            } else {
                Alert.alert('Error', 'No se recibió un token en la respuesta.');
            }
        } catch (error) {
            Alert.alert('Error', error.message || 'Error en la conexión con el servidor.');
        }
    };
    if (isAuthenticated) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        });
    }

    return (
        <LinearGradient colors={['#224870', '#b2a4f4', '#224870']} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default LoginScreen;
