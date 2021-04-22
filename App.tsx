import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1}}>
				<StatusBar style="light"/>
				<View style={styles.containerResult}>
					<Text style={styles.result}>20.00</Text>
				</View>
				<View style={styles.containerCalc}>
					<View style={styles.row}>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#aec1d4' : '#8395a7'}, styles.item]}>
							<Text style={styles.textDark}>AC</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#aec1d4' : '#8395a7'}, styles.item]}>
							<Text style={styles.textDark}>√</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#aec1d4' : '#8395a7'}, styles.item]}>
							<Text style={styles.textDark}>%</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#fff' : '#ff9f43'}, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>÷</Text>
									: <Text style={styles.textLight}>÷</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>7</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>8</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>9</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#fff' : '#ff9f43'}, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>x</Text>
									: <Text style={styles.textLight}>x</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>4</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>5</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>6</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#fff' : '#ff9f43'}, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>-</Text>
									: <Text style={styles.textLight}>-</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>3</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>2</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>1</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#fff' : '#ff9f43'}, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>+</Text>
									: <Text style={styles.textLight}>+</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>0</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#60707f' : '#434e58'}, styles.item]}>
							<Text style={styles.textLight}>.</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#fff' : '#ff9f43'}, styles.item, styles.itemEqual]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>=</Text>
									: <Text style={styles.textLight}>=</Text>
							)}
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222f3e',
		paddingTop: Platform.OS === 'ios' ? 0 : 30,
	},
	containerResult: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: Platform.OS === 'ios' ? 0 : 10,
	},
	result: {
		fontSize: 80,
		color: '#fff'
	},
	containerCalc: {
		flex: 2,
		padding: Platform.OS === 'ios' ? 0 : 10,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 15
	},
	textDark: {
		color: '#222f3e',
		fontSize: 28,
		fontWeight: "bold",
	},
	textLight: {
		color: '#fff',
		fontSize: 28,
		fontWeight: "bold",
	},
	textLightPressed: {
		color: '#ff9f43',
		fontSize: 28,
		fontWeight: "bold",
	},
	item: {
		justifyContent: 'center',
		alignItems: "center",
		height: 80,
		width: 80,
		borderRadius: 80,
	},
	itemEqual: {
		width: 160
	}
});
