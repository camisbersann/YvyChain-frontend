import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import Input from "../../components/Input/index.jsx";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import { useState, useEffect } from "react";
  import tw from "tailwind-react-native-classnames";
  
  export default function CadastroSetor() {
    const navigation = useNavigation();
    const [editId, setEditId] = useState(null);
    const [nome, setNome] = useState("");
    const [impactoAmbiental, setimpactoAmbiental] = useState(0);
    const [empresaId, setEmpresaId] = useState("");
    const [setores, setSetores] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
  
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  
    const getSetores = async () => {
      try {
        const response = await axios.get(`${apiUrl}/setores`);
        setSetores(response.data.setores);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const postSetor = async () => {
      try {
        const response = await axios.post(`${apiUrl}/setores`, {
          nome: nome,
          impactoAmbiental: impactoAmbiental,
          empresa_id: empresaId,
        });
        console.log(response.data);
        getSetores();
        clearInputs();
      } catch (error) {
        console.error(error);
      }
    };
  
    const deleteSetor = async (id) => {
      try {
        const response = await axios.delete(`${apiUrl}/setores/${id}`);
        console.log(response.data);
        getSetores();
      } catch (error) {
        console.error(error);
      }
    };
  
    const putSetores = async (id) => {
      try {
        const response = await axios.put(`${apiUrl}/setores/${id}`, {
          nome: nome,
          impactoAmbiental: impactoAmbiental,
          empresa_id: empresaId,
        });
        //consolar o id para ver se está pegando
        console.log(id);
  
        getSetores();
        setIsEditing(false);
        clearInputs();
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fillInputs = (setor) => {
      setIsEditing(true);
      setNome(setor.nome);
      setimpactoAmbiental(setor.impactoAmbiental);
      setEmpresaId(setor.empresaId);
      setEditId(setor.id); // Salva o ID para usar no PUT
    };
  
    const clearInputs = () => {
      setNome("");
      setimpactoAmbiental(0);
      setEmpresaId("");
      setEditId(null); // Limpa o ID ao limpar os inputs
    };
  
    useEffect(() => {
      getSetores();
    }, []);
  
    return (
      <ScrollView style={{ backgroundColor: "#EED2B8" }}>
        <TouchableOpacity
          className={`bg-green-200 py-2 rounded-lg w-80 mx-auto my-8`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text className={`text-black text-center`}>Voltar</Text>
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold text-center mb-4`}>
          Cadastro de Setor
        </Text>
        <View className={`mb-4 w-80 mx-auto`}>
          <Input
            label="Nome"
            value={nome}
            onChangeText={setNome}
            style={tw`w-full`}
          />
          <Input
            label="Empresa ID"
            value={empresaId}
            onChangeText={setEmpresaId}
            style={tw`w-full`}
          />
        </View>
        {isEditing ? (
          <TouchableOpacity
            className={`bg-green-200 py-2 rounded-lg`}
            onPress={() => putSetores(editId)}
          >
            <Text className={`text-black text-center`}>Editar Setor</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className={`bg-green-200 py-2 rounded-lg w-80 mx-auto`}
            onPress={postSetor}
          >
            <Text className={`text-black text-center`}>Cadastrar Setor</Text>
          </TouchableOpacity>
        )}
        
      </ScrollView>
    );
  }
  