import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './screens/Screen01';
import Screen02 from './screens/Screen02';

export default function App() {
  return (
    <View>
      {/* <Screen01/> */}
      <Screen02/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
