import { ThemeProvider } from "@react-navigation/native";
import { Stack} from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{title:"Home"}}/>
       <Stack.Screen name="explore" options={{title:"ExploreUs"}}/>
    </Stack>
  )
}
