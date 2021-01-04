import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import TmpAvatar from '../../assets/tmpAvatar.png'

const windowWidth = Dimensions.get('window').width;

interface Props {
	id: number,
	userName?: string,
	userPhoto?: string,
	book?: { title: string, author?: string, id: string },
	photo?: string
	text?: string
}

export default function Feed(props: Props) {
	const {id, userName, userPhoto, book, photo, text} = props

  return (
    <View style={styles.container}>
			<View style={styles.userInfo}>
				<Image style={styles.userPhoto} source={userPhoto?userPhoto:TmpAvatar}/>
				<Text style={styles.userName}>{userName}</Text>
			</View>
			<View>
				{photo &&
					<AutoHeightImage
						style={styles.photo}
						width={windowWidth - 30}
						source={{uri: photo }}
					/>
				}
				<Text style={styles.content}>{text}</Text>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		marginBottom: 10,
		padding: 15,
		width: '100%',
	},

	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5
	},
	userPhoto: {
		width: 30,
		height: 30,
		borderRadius: 50,
	},
	userName: {
		marginLeft: 10,
		fontWeight: '600',
		fontSize: 15,
	},

	photo: {
		marginTop: 10,
		marginBottom: 10
	},
	content: {
		marginTop: 10
	}
});