import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Login from '../Login';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home"}/>
    </View>
  )
}