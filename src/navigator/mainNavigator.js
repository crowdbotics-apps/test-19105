import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps90205Navigator from '../features/Maps90205/navigator';
import Add-Item90204Navigator from '../features/Add-Item90204/navigator';
import Maps90200Navigator from '../features/Maps90200/navigator';
import UserProfile90196Navigator from '../features/UserProfile90196/navigator';
import Achievements182963Navigator from '../features/Achievements182963/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps90205: { screen: Maps90205Navigator },
Add-Item90204: { screen: Add-Item90204Navigator },
Maps90200: { screen: Maps90200Navigator },
UserProfile90196: { screen: UserProfile90196Navigator },
Achievements182963: { screen: Achievements182963Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
