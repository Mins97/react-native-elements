import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Pages
import EmptyPage from './EmptyPage';
import SamplePage from './SamplePage';
import HeaderPage from './HeaderPage';
import ListPage from './ListPage';

// 1. Stack Navigator
const s = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import Avatar from './rnElements/Avatar';
import Badge from './rnElements/Badge';
import BottomSheet from './rnElements/BottomSheet';
import Button from './rnElements/Button';
import ButtonGroup from './rnElements/ButtonGroup';
import Card from './rnElements/Card';
import CheckBox from './rnElements/CheckBox';
import Divider from './rnElements/Divider';
import Header from './rnElements/Header';
import Icon from './rnElements/Icon';
import Image from './rnElements/Image';
import Input from './rnElements/Input';
import ListItem from './rnElements/ListItem';
import Overlay from './rnElements/Overlay';
import Pricing from './rnElements/Pricing';
import Rating from './rnElements/Rating';
import SearchBar from './rnElements/SearchBar';
import Slider from './rnElements/Slider';
import SocialIcon from './rnElements/SocialIcon';
import Text from './rnElements/Text';
import Tile from './rnElements/Tile';
import Tooltip from './rnElements/Tooltip';

export default function Nav() {
  return (
    <NavigationContainer>
      <s.Navigator>
        <s.Screen name="ListPage" component={ListPage} />
        {elementList.map(r =>
          <s.Screen name={r.name} component={r} />)}
        <s.Screen name="EmptyPage" component={EmptyPage} />
        <s.Screen name="SamplePage" component={SamplePage} />
        <s.Screen name="HeaderPage" component={HeaderPage} />
      </s.Navigator>
    </NavigationContainer>
  );
};

// 2. Tab Navigator
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const t = createBottomTabNavigator();
// const page = ["EmptyPage", "SamplePage"];
// export default function Nav() {
//   return (
//     <NavigationContainer>
//       <t.Navigator>
//         <t.Screen name="ListPage" component={ListPage} />
//         <t.Screen name="EmptyPage" component={EmptyPage} />
//         <t.Screen name="SamplePage" component={SamplePage} />
//         <t.Screen name="HeaderPage" component={HeaderPage} />
//       </t.Navigator>
//     </NavigationContainer>
//   );
// };

const elementList =
  [Avatar
    , Badge
    , BottomSheet
    , Button
    , ButtonGroup
    , Card
    , CheckBox
    , Divider
    , Header
    , Icon
    , Image
    , Input
    , ListItem
    , Overlay
    , Pricing
    , Rating
    , SearchBar
    , Slider
    , SocialIcon
    , Text
    , Tile
    , Tooltip]
const basicList = [];