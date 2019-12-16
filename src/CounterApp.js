import React, { Component } from "react";
import { calculationText, clearText, calcText } from '../actions/action'
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { styles } from '../style/styles'
import { Animated, Easing } from 'react-native'



class CounterApp extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 3333,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {

        const color = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['blue', 'red', 'green']
        })

        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [20, 80, 20]
        })

        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Animated.Text style={{
                        opacity,
                        fontSize: textSize, color
                    }} >{this.props.result}</Animated.Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.props.number(id = "1")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>1</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "2")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>2</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "3")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>3</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.props.number(id = "4")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>4</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "5")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>5</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "6")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>6</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.props.number(id = "7")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>7</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "8")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>8</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "9")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>9</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.props.clear(id = "C")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>C</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = "0")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>0</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.number(id = ".")}>
                                <Text style={{ fontSize: 30, color: 'white' }}>.</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.operations}>
                        <TouchableOpacity onPress={() => this.props.number(id = "+")}>
                            <Text style={{ fontSize: 30, color: 'white' }}>+</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.number(id = "-")}>
                            <Text style={{ fontSize: 30, color: 'white' }}>-</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.number(id = "*")}>
                            <Text style={{ fontSize: 30, color: 'white' }}>*</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.number(id = "/")}>
                            <Text style={{ fontSize: 30, color: 'white' }}>/</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.calculate(this.props.result)}>
                            <Text style={{ fontSize: 30, color: 'white' }}>=</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.result,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        number: (result) => dispatch(calculationText(result, id)),
        clear: (result) => dispatch(clearText(result, id)),
        calculate: (result) => dispatch(calcText(result))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)






