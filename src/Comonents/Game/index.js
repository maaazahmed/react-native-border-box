import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';


const { } = Dimensions
export default class Game extends Component {

    selectBox(ind) {
        console.log(ind)

    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxContainer} >
                    <View style={{ backgroundColor: "#250b02", padding: 10, borderRadius: 10 }} >
                        <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 1)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 2)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 3)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 4)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 5)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 6)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 7)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 8)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 9)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 10)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>
                         <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 11)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 12)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 13)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 14)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 15)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 16)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 17)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 18)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 19)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 20)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                         <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 21)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 22)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 23)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 24)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 25)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 26)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 27)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 28)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 29)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 30)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                          <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 31)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 32)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 33)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 34)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 35)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 36)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 37)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 38)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 39)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 40)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                          <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 41)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 42)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 43)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 44)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 45)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 46)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 47)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 48)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 49)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 50)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                          <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 51)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 52)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 53)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 54)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 55)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 56)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 57)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 58)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 59)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 60)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                         <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 61)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 62)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 63)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 64)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 65)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 66)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 67)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 68)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 69)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 70)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                         <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 71)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 72)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 73)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 74)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 75)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 76)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 77)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 78)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 79)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 80)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                         <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 81)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 82)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 83)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 84)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 85)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 86)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 87)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 88)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 89)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 90)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>

                           <View style={{ width: "90%", height: 45, flexDirection: "row", }} >
                            <TouchableOpacity onPress={this.selectBox.bind(this, 91)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 92)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 93)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 94)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 95)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 96)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 97)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 98)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 99)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                            <TouchableOpacity onPress={this.selectBox.bind(this, 100)} activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                        </View>


                    </View>
                </View>


                <View style={styles.statusContainer}>
                    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", justifyContent: "center" }} >
                        <View>
                            <Text style={{ fontSize: 18, color: "#f0a951", fontWeight: "bold" }} >40</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, color: "#f0a951", fontWeight: "bold" }} >player 1</Text>
                        </View>
                        <View style={{ width: "90%", borderColor: "#fff", borderWidth: 0, height: 20, marginTop: 10 }} >
                            <View style={{ backgroundColor: "#f0a951", height: 100, width: 60 }} ></View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.UpButtonContent}>
                            <TouchableOpacity
                                activeOpacity={0.5} style={styles.UpButton} >
                                <Text style={styles.buttonText} >U</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.midelRow}>
                            <TouchableOpacity
                                activeOpacity={0.5} style={styles.leftButton} >
                                <Text style={styles.buttonText} >L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.cancelButn}>
                                <Text style={[styles.buttonText, { color: "#250b02", fontSize: 25 }]} >X</Text>
                                {/* <Icons name="redo-alt" /> */}
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.rightButton}>
                                <Text style={styles.buttonText} >R</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bottomButtonContent}>
                            <TouchableOpacity
                                activeOpacity={0.5} style={styles.downButton} >
                                <Text style={styles.buttonText} >D</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", justifyContent: "center" }} >
                        <View>
                            <Text style={{ fontSize: 18, color: "#f0a951", fontWeight: "bold" }} >60</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, color: "#f0a951", fontWeight: "bold" }} >player 2</Text>
                        </View>
                        <View style={{ width: "90%", borderColor: "#fff", borderWidth: 0, height: 20, alignItems: "flex-end", marginTop: 10 }} >
                            <View style={{ backgroundColor: "#f0a951", height: 100, width: 60 }} ></View>
                        </View>
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    boxContainer: {
        backgroundColor: "#f0a951",
        height: "80%",
        justifyContent: "center",
        alignItems: "center"

    },
    statusContainer: {
        backgroundColor: "#250b02",
        flex: 1,
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 5
    },

    buttonContainer: {
        flex: 1,
        backgroundColor: "#f0a951",
        justifyContent: "space-between",
        borderColor: "#f0a951",
        borderWidth: 1,
        padding: 5,
    },

    UpButtonContent: {
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    bottomButtonContent: {
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    buttonText: {
        color: "#250b02",
        fontWeight: "bold",
        fontSize: 18
    },
    midelRow: {
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    UpButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    rightButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 5
    },

    leftButton: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        alignItems: "flex-start",
        marginLeft: 5

    },


    downButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cancelButn: {
        backgroundColor: "#f0a951",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "70%",
        borderRadius: 1000,
    }

});
