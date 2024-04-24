import { View, Text,  } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Title title={"CONHEÇA A NOSSA EMPRESA"}/>
    </View>
  )
}