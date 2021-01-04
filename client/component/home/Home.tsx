import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import Feed from './Feed'

const DATA = [
  {id: 1, userName: "leejuye", text: "떡국 먹고 싶다.", photo: 'https://i.ytimg.com/vi/EfRGTCyk6nU/maxresdefault.jpg', liked: true},
  {id: 2, userName: "joy", text: "생각 난 영단어가 tree여서 tree를 쳐서 사진을 따왔다. 뭔가 긴 글로 테스트해봐야하는데 긴 글이 생각이 안나네. 진짜 긴 글이여야한느데 텔미 텔미 테테테테테테텔미 누난 너무 예뻐 미쳐 베이벱 베이벱 베이벱", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Linde_von_linn.jpg/285px-Linde_von_linn.jpg'},
  {id: 3, userName: "orihehe", text: "text test 3", liked: true},
  {id: 4, userName: "orihehe", text: "text test 3"},
  {id: 5, userName: "orihehe", text: "text test 3"},
  {id: 6, userName: "orihehe", text: "text test 3"},
]


export default function Home() {
  const renderItem = ({item}:any) => <Feed {...item}/>

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
});
