import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from "react-native";

// @ts-ignore
const StatusBarCustom = ({backgroundColor, ...props}) => {
	return <View style={[styles.statusBar, {backgroundColor}]}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props}/>
	</View>
};

const styles = StyleSheet.create({
	statusBar: {
		height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
	}
})

export default StatusBarCustom;
