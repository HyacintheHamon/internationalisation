import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useTranslation } from "../translations";

export default function TimezoneScreen() {
  const { formatTime } = useTranslation();

  const time = Date.now();

  // DateTimeFormat options
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  return (
    <View style={styles.container}>
      <Text>Time: {time}</Text>
      <Text style={{ marginTop: 10 }}>
        Formatted time (Default): {formatTime(time)}
      </Text>
      <Text style={{ marginTop: 10 }}>
        Formatted time (US timezone, New_York):{" "}
        {formatTime({
          value: time,
          options: {
            hour: "numeric",
            minute: "numeric",
            timeZone: "America/New_York",
          },
        })}
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
