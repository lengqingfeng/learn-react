/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from "react-navigation";
import React from "react";
import TabBarNavigator from "./src/common/AppTabBarNavigator";
const App = createAppContainer(TabBarNavigator);
export default App;
