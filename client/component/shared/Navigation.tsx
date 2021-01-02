import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Home from '../home/Home'
import Friend from '../friend/Friend'
import My from '../my/My'

export default function Navigation() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', icon: 'home' },
    { key: 'friend', icon: 'charity' },
    { key: 'my', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    friend: Friend,
    my: My,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
} ;