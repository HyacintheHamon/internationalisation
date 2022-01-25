import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useTranslation } from "../translations";

export default function DateScreen() {
  const { formatDate } = useTranslation();

  const date = new Date();
  const formattedDate = formatDate(date);
  return (
    <View style={styles.container}>
      <Text>Date: {JSON.stringify(date)}</Text>
      <Text style={{ marginTop: 10 }}>Formatted date: {formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
