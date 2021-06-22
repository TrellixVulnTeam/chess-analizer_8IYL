import React from "react";
import { LoadAssets } from "./src/components";
import Chess, { assets as chessAssets } from "./src/Chess";

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
  "SFProRounded-Semibold": require("./assets/fonts/SFProRounded/SF-Pro-Rounded-Semibold.otf"),
  "SFProRounded-Medium": require("./assets/fonts/SFProRounded/SF-Pro-Rounded-Medium.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
  "GothamRounded-Medium": require("./assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

const assets = [...chessAssets];

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Chess />
    </LoadAssets>
  );
};

export default App;
