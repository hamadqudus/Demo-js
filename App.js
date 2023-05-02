import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentScreen from "./src/screens/componentsScreen";
import listScreen from "./src/screens/listScreen";
import imageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/ColorScreen";
import squareScreen from "./src/screens/squareScreen";
import textScreen from "./src/screens/textScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentScreen,
    List: listScreen,
    Images: imageScreen,
    Count: CounterScreen,
    Color: ColorScreen,
    Square: squareScreen,
    Text: textScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
