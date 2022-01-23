import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StatusBarCustom from "./components/StatusBarCustom";

export default function App() {

	const [result, setResult] = useState(0);
	const [firstValue, setFirstValue] = useState<(number | string)[]>([]);
	const [secondValue, setSecondValue] = useState<(number | string)[]>([]);
	const [action, setAction] = useState<String | null>(null);

	const handleValue = (valueSelect: number | string) => {
		if (!action) {
			setFirstValue([...firstValue, valueSelect])
		} else {
			setSecondValue([...secondValue, valueSelect])
		}
	}

	const reset = () => {
		setResult(0)
		setFirstValue([])
		setSecondValue([])
		setAction(null)
	}

	const calcul = () => {
		switch (action) {
			case '+':
				setResult(Number(firstValue.join('')) + Number(secondValue.join('')))
				break
			case '-':
				setResult(Number(firstValue.join('')) - Number(secondValue.join('')))
				break
			case '/':
				setResult(Number(firstValue.join('')) / Number(secondValue.join('')))
				break
			case 'x':
				setResult(Number(firstValue.join('')) * Number(secondValue.join('')))
				break
		}
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBarCustom backgroundColor={'#222f3e'} barStyle={'line-content'} />
			<View style={styles.container}>
				<View style={styles.containerResult}>
					<Text style={styles.result}>{result}</Text>
					<View style={styles.containerLabel}>
						<Text style={styles.values}>{firstValue}</Text>
						<Text style={styles.actions}>{action}</Text>
						<Text style={styles.values}>{secondValue}</Text>
					</View>
				</View>
				<View style={styles.containerCalc}>
					<View style={styles.row}>
						<Pressable onPress={() => reset()}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#aec1d4' : '#8395a7' }, styles.item]}>
							<Text style={styles.textDark}>AC</Text>
						</Pressable>
						<Pressable
							style={({ pressed }) => [{ backgroundColor: pressed ? '#aec1d4' : '#8395a7' }, styles.item]}>
							<Text style={styles.textDark}>√</Text>
						</Pressable>
						<Pressable
							style={({ pressed }) => [{ backgroundColor: pressed ? '#aec1d4' : '#8395a7' }, styles.item]}>
							<Text style={styles.textDark}>%</Text>
						</Pressable>
						<Pressable onPress={() => setAction('/')}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#ff9f43' }, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>÷</Text>
									: <Text style={styles.textLight}>÷</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable onPress={() => handleValue(7)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>7</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(8)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>8</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(9)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>9</Text>
						</Pressable>
						<Pressable onPress={() => setAction('x')}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#ff9f43' }, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>x</Text>
									: <Text style={styles.textLight}>x</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable onPress={() => handleValue(4)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>4</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(5)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>5</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(6)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>6</Text>
						</Pressable>
						<Pressable onPress={() => setAction('-')}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#ff9f43' }, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>-</Text>
									: <Text style={styles.textLight}>-</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable onPress={() => handleValue(3)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>3</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(2)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>2</Text>
						</Pressable>
						<Pressable onPress={() => handleValue(1)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>1</Text>
						</Pressable>
						<Pressable onPress={() => setAction('+')}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#ff9f43' }, styles.item]}>
							{({ pressed }) => (
								pressed ? <Text style={styles.textLightPressed}>+</Text>
									: <Text style={styles.textLight}>+</Text>
							)}
						</Pressable>
					</View>
					<View style={styles.row}>
						<Pressable onPress={() => handleValue(0)}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>0</Text>
						</Pressable>
						<Pressable onPress={() => handleValue('.')}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#60707f' : '#434e58' }, styles.item]}>
							<Text style={styles.textLight}>.</Text>
						</Pressable>
						<Pressable onPress={() => calcul()}
							style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#ff9f43' }, styles.item, styles.itemEqual]}>
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
	},
	statusBar: {
		backgroundColor: 'transparent',
	},
	containerResult: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		paddingRight: 10,
	},
	result: {
		fontSize: 90,
		color: '#fff',
		marginBottom: 20
	},
	containerLabel: {
		flexDirection: 'row',
	},
	values: {
		color: '#fff',
		fontSize: 50
	},
	actions: {
		color: '#ff9f43',
		fontSize: 50,
		marginHorizontal: 5
	},
	containerCalc: {
		flex: 3,
		justifyContent: 'flex-end',
		padding: 10,
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
