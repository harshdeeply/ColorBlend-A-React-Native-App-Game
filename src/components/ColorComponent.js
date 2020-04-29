import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorComponent = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.buttons}>
            <View style={{height: 15, width: 15, borderRadius: 5, backgroundColor:`${color}`}}></View>
            <Button
                title={`Increase ${color}`}
                onPress={() => onIncrease()}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => onDecrease()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        marginVertical: 15
    }
});

export default ColorComponent;