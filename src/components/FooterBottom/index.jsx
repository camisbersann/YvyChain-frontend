import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import Title from '../Title';

const FooterBottom = () => {

    return (
        <View className={`justify-around items-center w-full h-96 py-4`}style={{ backgroundColor: "#3B5B30" }}>
            <View className={`bg-slate-400 h-1 w-full -mt-8`}></View>
            <View>
                <Text className={`text-white mx-auto text-lg`}>Yvy Chain©</Text>
                <Text className={`text-white`}>Elaborado pela Elite Coders</Text>
            </View>
            <View className={`bg-slate-400 h-1 w-full`}></View>
            
            <View className={`w-full mx-auto`}>
                <Text className={`text-white mx-auto`}>Informações sobre a empresa:</Text>
                <Text className={`text-white mx-auto`}>Endereço: 123 Rua Principal, Cidade, Estado</Text>
                <Text className={`text-white mx-auto`}>Telefone: (11) 1234-5678</Text>
                <Text className={`text-white mx-auto`}>Email: contato@yvychain.com</Text>
            </View>
            
            <View className={`w-full`}>
                <Text className={`text-white mx-auto`}>Informações do desenvolvedor:</Text>
                <Text className={`text-white mx-auto`}>Nome: Elite Coders</Text>
                <Text className={`text-white mx-auto`}>Website: www.elitecoders.com</Text>
            </View>
        </View>
    );
};

export default FooterBottom;
