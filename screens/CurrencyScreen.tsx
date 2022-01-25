import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useTranslation } from "../translations";

export default function CurrencyScreen() {
  const { formatCurrencyNumber } = useTranslation();

  const price = 300;
  return (
    <View style={styles.container}>
      <Text>Value: {price}</Text>
      <Text style={{ marginTop: 10 }}>
        Formatted value (default): {formatCurrencyNumber({ value: price })}
      </Text>
      <Text style={{ marginTop: 10 }}>
        Formatted value (USD):{" "}
        {formatCurrencyNumber({ value: price, options: { currency: "USD" } })}
      </Text>
      <Text style={{ marginTop: 10 }}>
        Formatted value (CAD):{" "}
        {formatCurrencyNumber({ value: price, options: { currency: "CAD" } })}
      </Text>
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
