import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Contribuition() {
  return (
    <View style={styles.container}>
      <Title  style={styles.title} title={"Contribuition"}/>
    </View>
  )
}