import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Proposal() {
  return (
    <View style={styles.container}>

<ScrollView>
      <View style={styles.container}>
        <Title style={styles.title} title={"CONHEÇA NOSSA PROPOSTA"} />
        </View>
        
      
        <View style={styles.divStyle}>
        <Text>Em um momento decisivo para o futuro do nosso planeta, a iniciativa de formar uma parceria entre o grupo "Elite Coders" e a recém-estabelecida divisão de desenvolvimento sustentável da Organização das Nações Unidas.</Text>
      </View>
      
      <View style={styles.divStyle}>
        <Text>Esta colaboração visa combinar a inovação tecnológica com políticas de sustentabilidade.</Text>
      </View>
      
      <View style={styles.divStyle}>
      
        <Text>Representa um passo significativo para a realização de progressos substanciais em sustentabilidade global.</Text>
      </View>

      <View style={styles.divStyle}>
        <Text style={styles.divStyle}>Para criar soluções que não apenas respeitem o meio ambiente, mas também promovam o desenvolvimento econômico e social de maneira equilibrada e duradoura.</Text>
        </View>
      
    
</ScrollView>
    </View>
    
  );
}