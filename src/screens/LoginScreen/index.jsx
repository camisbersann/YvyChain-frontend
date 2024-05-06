import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';

const LoginScreen = () => {
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');  // senha seria o ID da empresa
    const navigation = useNavigation();
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${apiUrl}/empresas/${senha}`, { params: { cnpj } });
            if (response.data.empresa) {
                clearInput();
                navigation.navigate('PaginaGerenciamento', { empresaId: senha });
            } else {
                alert('CNPJ ou senha (ID da empresa) inválidos!');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login');
        }
    };

    const clearInput = () =>[
        setCnpj(''),
        setSenha('')
    ]

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.textoinput}
                placeholder="Digite o CNPJ"
                value={cnpj}
                onChangeText={setCnpj}
                keyboardType="numeric"
            />
            <TextInput
            style={styles.textoinput}
                placeholder="Digite a senha (ID da empresa)"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.botao}
                onPress={handleLogin}>
                <Text style={styles.textobotao}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
