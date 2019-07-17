import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "../pages/HomeScreen";
import ProfileScreen from "../pages/ProfileScreen";
import Icon from "react-native-vector-icons/AntDesign";
const TabBarNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({ Home: HomeScreen }),
      path: "fastuikit://home",
      navigationOptions: {
        title: "FastUIKit",
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={22} />
        )
      }
    },
    Settinng: {
      screen: createStackNavigator({ Settinng: ProfileScreen }),
      path: "fastuikit://settting",
      navigationOptions: {
        title: "Setting",
        tabBarLabel: "Set",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="setting" color={tintColor} size={22} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Settinng"],
    navigationOptions: {
      tabBarVisible: true
    }
  },
  {
    tabBarOptions: {
      //当前选中的tab bar的文本颜色和图标颜色
      activeTintColor: "blue",
      //当前未选中的tab bar的文本颜色和图标颜色
      inactiveTinitColor: "grey",
      //是否显示tab bar的图标，默认是false
      showIcon: true,
      //showLabel - 是否显示tab bar的文本，默认是true
      showLabel: true,
      //tab 页指示符的样式 (tab页下面的一条线).
      indicatorStyle: { height: 0 },
      //是否允许滑动切换tab页
      swipeEnabled: true,
      //是否在切换tab页时使用动画
      animationEnabled: true,
      labelStyle: {
        fontSize: 14 //tabbar title 大小
      }
    }
  }
);

export default TabBarNavigator;
