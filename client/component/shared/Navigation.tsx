import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Home from '../home/Home'
import Friend from '../friend/Friend'
import My from '../my/My'

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', icon: 'home' },
    { key: 'albums', icon: 'charity' },
    { key: 'my', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: Friend,
    my: My,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;