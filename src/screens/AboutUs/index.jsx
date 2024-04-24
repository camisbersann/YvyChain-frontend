import { View, Text, ImageBackground, ScrollView, Link } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import AboutUs from '../AboutUs';
import Contribuition from '../Contribuition';
import Home from '../Home';
import Profile from '../Profile';
import Category from '../Category';

export default function AboutUs() {
  return (
    <ImageBackground source={require("../../../assets/fundoaboutus2.jpg")} style={styles.container}>
    <View style={styles.container}>
      <Title title={"CONHEÇA A NOSSA EMPRESA"}/>
    <ScrollView>
        <View style={styles.coluna}>
            <View style={styles.coluna1}>
            <Text style={styles.titulocoluna}>Por que do nome Yvy Chain?</Text>
            <Text style={styles.textcoluna}>"Yvy", que deriva do guarani, língua indígena nativa da América do Sul, significa "terra" ou "natureza". Este termo carrega a importância e a beleza da natureza que nos cerca. "Chain", por sua vez, é uma alusão ao conceito de cadeia, um elo que une elementos de forma interdependente.  Nossa empresa acredita firmemente na integração harmoniosa entre natureza e tecnologia, reconhecendo que ambas são essenciais para um futuro sustentável.</Text>
            </View>
            <View style={styles.coluna2}>
            <Text style={styles.titulocoluna}>Nosso Objetivo</Text>
            <Text style={styles.textcoluna}>Unir a vanquarda da inovação tecnológica com as políticas de sustentabilidade mais progressistas. Juntos, estamos determinados a criar soluções que não apenas respeitem o meio ambiente, mas também impulsionem o desenvolvimento econômico e social de forma equilibrada e duradoura.</Text>
            </View>   
        </View>
    </ScrollView>
    </View>
    </ImageBackground>
  )
}