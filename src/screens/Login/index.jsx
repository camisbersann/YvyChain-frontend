import { View, Text } from "react-native";
import styles from "../Login/styles";
import Title from "../../components/Title";

export default function Login() {
  return (
    <View style={styles.container}>
      <Title title={Login}></Title>
      <Title title="Login"></Title>

      
        <View>
          <Text style={styles.texto}>
            Acesse essa área da sua empresa com as respectivas credenciais
          </Text>
        </View>

        <View style={styles.div}>
          <Text style={styles.info1}>CNPJ da empresa:</Text>
          <Text style={styles.info2}>Nome do funcionário:</Text>
          <Text style={styles.info3}>Chave de entrada:</Text>
        </View>

        <View>
          <View style={styles.button}>Entre</View>
        </View>
      

      <Text style={styles.texto2}>
        Não está no sistema? Entre em contato com o nosso suporte.
      </Text>
    </View>
  );
}
