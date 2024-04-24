import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Contribuition() {
  return (
    <View style={styles.container}>
      <Title  style={styles.title} title={"SUA CONTRIBUIÇÃO"}/>
        <ScrollView>
            <Text style={styles.subtitulo}>Como a sua participação no projeto pode contribuir para o meio ambiente sustentavel e um desenvolvimento humano melhor?</Text>
            <View>
            <View syle={styles.divpequena}>
                <Image source={require('../../../assets/maos.jpg')} style={styles.image}/>
                <Text style={styles.subtitulo}>Sua participação em nosso projeto promove sustentabilidade ambiental e desenvolvimento humano.</Text>
            </View>
            <View>
                <Image source={require('../../../assets/broto.jpg')} style={styles.image}/>
                <Text style={styles.subtitulo}>Além disso, seu envolvimento contribui para uma educação mais inclusiva e capacita as pessoas.</Text>
            </View>
            <View>
                <Image source={require('../../../assets/robo.jpg')} style={styles.image}/>
                <Text style={styles.subtitulo}>Além disso, seu envolvimento contribui para uma educação mais inclusiva e capacita as pessoas.</Text>
                </View>
            </View>

        </ScrollView>
    </View>
  )
}