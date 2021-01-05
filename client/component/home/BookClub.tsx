import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

interface Props {
	id: number,
	image?: string,
	title: string,
	dday: number
}

export default function BookClub(props: Props) {
	const {id, image, title, dday} = props

  return (
    <View style={styles.container}>
			<ImageBackground style={styles.image} imageStyle={styles.imageStyle} source={{uri: image}}/>
			<Text style={styles.title} numberOfLines={1}>{title}</Text>
			<Text style={styles.dday} >{`D-${dday}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		marginBottom: 10,
		padding: 15,
		width: 150,
	},
	image: {
		resizeMode: 'cover',
		width: 120,
		height: 180,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1,
		elevation: 1,
	},
	imageStyle: {
		borderRadius: 15
	},
	title: {
		marginTop: 10,
		fontWeight: '600',
		textAlign: 'center'
	},
	dday: {
		textAlign: 'center',
		color: 'grey',
		fontSize: 10
	}
});