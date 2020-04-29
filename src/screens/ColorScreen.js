import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ColorComponent from '../components/ColorComponent';

const COLOR_COUNTER = 1;


const ColorCounter = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const color_check = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 256 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 256 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 256 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    height: Dimensions.get('window').height * 0.45,
                    width: Dimensions.get('window').width * 0.80,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    borderRadius: Dimensions.get('window').width,
                    marginBottom: 20
                }}
            />
            <Text style={styles.rgbText}>Current RGB value: rgb({red}, {green}, {blue})</Text>
            <ColorComponent
                color="red"
                onIncrease={() => color_check('red', COLOR_COUNTER)}
                onDecrease={() => color_check('red', -1 * COLOR_COUNTER)}
            />
            <ColorComponent
                color="green"
                onIncrease={() => color_check('green', COLOR_COUNTER)}
                onDecrease={() => color_check('green', -1 * COLOR_COUNTER)}
            />
            <ColorComponent
                color="blue"
                onIncrease={() => color_check('blue', COLOR_COUNTER)}
                onDecrease={() => color_check('blue', -1 * COLOR_COUNTER)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rgbText: {
        fontSize: 20,
        marginBottom: 20
    }
});

export default ColorCounter;