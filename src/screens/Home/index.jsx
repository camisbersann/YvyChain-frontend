import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home"} />

       <View style={styles.textStyle}>
        <Text style={styles.text}>Bem vindo
        </Text>
        </View>

      <View style={styles.divStyle}>
        <Text>Nossa proposta</Text>
        <Text>Conheça nossa missão e solução sustentável para o desenvolvimento humano.</Text>
      </View>
      
      <View style={styles.divStyle}>
        <Text>Sua contribuição</Text>
        <Text>Entenda como sua colaboração nesse projeto pode promover o desenvolvimento.</Text>
      </View>
      
      <View style={styles.divStyle}>
        <Text>Conheça a Yvy</Text>
        <Text>A nossa inteligência capaz de rastrear a pegada ecológica e a classificação de desenvolvimento da sua empresa.</Text>
      </View>

      <View style={styles.textStyle}>
        <Text style={styles.text}>O projeto GreenChain é um sistema ambicioso que busca integrar sustentabilidade profundamente nos processos de produção industrial. Por meio de análises detalhadas e monitoramento contínuo, visa não apenas reduzir o impacto ambiental, mas também promover práticas de produção mais conscientes e responsáveis, alinhadas com os objetivos globais de sustentabilidade.</Text>
      </View>
    </View>
  );
}