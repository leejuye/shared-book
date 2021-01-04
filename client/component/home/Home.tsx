import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View, Text, ScrollView } from "react-native";

import Feed from './Feed'
import BookClub from './BookClub'

const DATA = [
  {id: 1, userName: "leejuye", text: "떡국 먹고 싶다.", photo: 'https://i.ytimg.com/vi/EfRGTCyk6nU/maxresdefault.jpg', liked: true},
  {id: 2, userName: "joy", text: "생각 난 영단어가 tree여서 tree를 쳐서 사진을 따왔다. 뭔가 긴 글로 테스트해봐야하는데 긴 글이 생각이 안나네. 진짜 긴 글이여야한느데 텔미 텔미 테테테테테테텔미 누난 너무 예뻐 미쳐 베이벱 베이벱 베이벱", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Linde_von_linn.jpg/285px-Linde_von_linn.jpg'},
  {id: 3, userName: "orihehe", text: "text test 3", liked: true},
  {id: 4, userName: "orihehe", text: "text test 3"},
  {id: 5, userName: "orihehe", text: "text test 3"},
  {id: 6, userName: "orihehe", text: "text test 3"},
]

const BOOK_DATA = [
  {
    id: 1,
    image: 'http://image.kyobobook.co.kr/images/book/xlarge/796/x9791188331796.jpg',
    title: '돈의 속성',
    dday: 5
  },
  {
    id: 2,
    image: 'http://image.kyobobook.co.kr/images/book/xlarge/809/x9791190030809.jpg',
    title: '건강하게 나이 든다는 것',
    dday: 0
  },
  {
    id: 3,
    image: 'http://image.kyobobook.co.kr/images/book/xlarge/493/x9788931021493.jpg',
    title: '여자를 위해 대신 생각해줄 필요는 없다',
    dday: 2
  },
]


export default function Home() {
  const renderBookClub = ({item}:any) => <BookClub {...item}/>

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <Text style={styles.title}>New Book Clubs</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderBookClub}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View>
        <Text style={styles.title}>Feed</Text>
        {DATA.map((props:any) => <Feed {...props}/>)}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: '600'
  }
});
