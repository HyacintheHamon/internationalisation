import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IntlProvider } from "react-intl";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <IntlProvider locale="en">
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </IntlProvider>
      </SafeAreaProvider>
    );
  }
}
