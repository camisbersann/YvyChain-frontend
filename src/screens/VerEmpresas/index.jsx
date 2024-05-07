import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import tw from "tailwind-react-native-classnames";

export default function VerEmpresas() {
  const navigation = useNavigation();
  const [empresas, setEmpresas] = useState([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const getEmpresas = async () => {
    try {
      const response = await axios.get(`${apiUrl}/empresas`);
      setEmpresas(response.data.empresas);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getEmpresas();
  }, []);

  return (
    <View className={`flex-1`} style={{ backgroundColor: "#314D27" }}>
      <ScrollView className={`flex-1`}>
        {empresas.map((empresa) => (
          <View
          key={empresa.id}
          className={`bg-slate-400 p-2 rounded-lg mb-2`}
        >
          <Text className={`text-white text-lg mx-auto`}>Nome: {empresa.nome}</Text>
          <View className={`bg-slate-500 h-1 w-full mt-4 mb-4`}></View>
          <Text className={`text-white`} >CNPJ: {empresa.cnpj}</Text>
          <Text className={`text-white`}>Email: {empresa.email}</Text>
          <Text className={`text-white`}>Endereço: {empresa.endereco}</Text>
          <Text className={`text-white`}>Telefone: {empresa.telefone}</Text>
          <Text className={`text-white`}>
            Nota Pegada Ecológica: {empresa.notaPegadaEcologica}
          </Text>
        </View>
        ))}
      </ScrollView>
    </View>
  );
}
