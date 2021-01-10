import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Pages
import EmptyPage from './EmptyPage';
import SamplePage from './SamplePage';
//import HeaderPage from './HeaderPage';
import ListPage from './ListPage';

// 1. Stack Navigator
const s = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import AvatarPage from './rnElements/AvatarPage';
import BadgePage from './rnElements/BadgePage';
import BottomSheetPage from './rnElements/BottomSheetPage';
import ButtonPage from './rnElements/ButtonPage';
import ButtonGroupPage from './rnElements/ButtonGroupPage';
import CardPage from './rnElements/CardPage';
import CheckBoxPage from './rnElements/CheckBoxPage';
import DividerPage from './rnElements/DividerPage';
import HeaderPage from './rnElements/HeaderPage';
import IconPage from './rnElements/IconPage';
import ImagePage from './rnElements/ImagePage';
import InputPage from './rnElements/InputPage';
import ListItemPage from './rnElements/ListItemPage';
import OverlayPage from './rnElements/OverlayPage';
import PricingPage from './rnElements/PricingPage';
import RatingPage from './rnElements/RatingPage';
import SearchBarPage from './rnElements/SearchBarPage';
import SliderPage from './rnElements/SliderPage';
import SocialIconPage from './rnElements/SocialIconPage';
import TextPage from './rnElements/TextPage';
import TilePage from './rnElements/TilePage';
import TooltipPage from './rnElements/TooltipPage';

export default function Nav() {
  return (
    <NavigationContainer>
      <s.Navigator>
        <s.Screen name="ListPage" component={ListPage} />
        {elementList.map(r =>
          <s.Screen key={(i, a) => a} name={r.name} component={r} />)}
        <s.Screen name="EmptyPage" component={EmptyPage} />
        <s.Screen name="SamplePage" component={SamplePage} />
        {/* <s.Screen name="HeaderPage" component={HeaderPage} /> */}
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
  [AvatarPage
    , BadgePage
    , BottomSheetPage
    , ButtonPage
    , ButtonGroupPage
    , CardPage
    , CheckBoxPage
    , DividerPage
    , HeaderPage
    , IconPage
    , ImagePage
    , InputPage
    , ListItemPage
    , OverlayPage
    , PricingPage
    , RatingPage
    , SearchBarPage
    , SliderPage
    , SocialIconPage
    , TextPage
    , TilePage
    , TooltipPage]
const basicList = [];