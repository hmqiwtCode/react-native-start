import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListItem from './src/screens/ListItem';
import ImageList from './src/screens/ImageList';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListItem,
    Image : ImageList,
    Square : SquareScreen
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
     
    // },
  }
);

export default createAppContainer(navigator);