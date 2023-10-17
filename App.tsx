import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ParallaxCarousel from "./src/components/ParallaxCarousel.tsx";
import SBItem from "./src/components/SBItem";
import SBTextItem from "./src/components/SBTextItem";
import SButton from "./src/components/SButton";
import QRCode from "src/components/QRCode";
import * as Updates from "expo-updates";
import SBImageItem from "./src/components/SBImageItem";
import { createStackNavigator } from "@react-navigation/stack";
import { window } from "./src/constants/index";
import { RootNavigator } from "./src/navigation/root";
import { isWeb } from "./src/utils";

const WebContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <View
      style={{
        height: "100%",
        width: window.width,
        alignSelf: "center",
        margin: "auto",
      }}

    >
      {children}
       <GestureHandlerRootView style={{ flex: 1 }}>
              <ParallaxCarousel /> {/* Use the ParallaxCarousel component here */}
              <RootNavigator />
            </GestureHandlerRootView>
    </View>
  );
};

function App() {
  const app = (
    <React.Suspense fallback={null}>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigator/>
        </GestureHandlerRootView>
      </View>
    </React.Suspense>
  );

  if (isWeb)
    return <WebContainer>{app}</WebContainer>;

  return app;
}

export default App;
