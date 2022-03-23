import { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Bottomsheet } from "../components";
import { AntDesign } from "@expo/vector-icons";
interface Props {}

export const Home: FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.box}>
        <Text>Home</Text>
        <Button title="show" onPress={() => setVisible(true)} />

        <Bottomsheet visible={visible} setVisible={setVisible}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="clockcircleo" size={24} color="black" />
            <Text style={styles.btnText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert("Hola", "Hola")}
            style={styles.btn}
          >
            <AntDesign name="API" size={24} color="black" />
            <Text style={styles.btnText}>Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert("Hola", "Hola")}
            style={styles.btn}
          >
            <AntDesign name="API" size={24} color="black" />
            <Text style={styles.btnText}>Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert("Hola", "Hola")}
            style={styles.btn}
          >
            <AntDesign name="API" size={24} color="black" />
            <Text style={styles.btnText}>Alert</Text>
          </TouchableOpacity>
        </Bottomsheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    padding: 15,
  },
  btnText: {
    marginStart: 10,
  },
});
