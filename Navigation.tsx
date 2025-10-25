import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./features/home";

const RootStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen
        }
    }
})

const RootNavigation = createStaticNavigation(RootStack);

const Navigation = () => {
    return <RootNavigation />
}

export { Navigation }