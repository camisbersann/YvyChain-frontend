import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Contribuition() {
  return (
    <View style={styles.container}>
      <Title  style={styles.title} title={"SUA CONTRIBUIÇÃO"}/>
        <ScrollView>
            <Text style={styles.subtitulo}>Como a sua participação no projeto pode contribuir para o meio ambiente sustentavel e um desenvolvimento humano melhor?</Text>
            <View syle={styles.divpequena}>
                <Image source={require('../../../assets/broto.jpg')} style={styles.image}/>
                <Text style={styles.subtitulo}>Aqui você pode descrever como a sua contribuição pode ajudar o meio ambiente e o desenvolvimento humano.</Text>
            </View>
        </ScrollView>
    </View>
  )
}