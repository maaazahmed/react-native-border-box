import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome"
import Icons from 'react-native-vector-icons/dist/FontAwesome';

const { } = Dimensions
export default class Game extends Component {



    
    render() {
        let arr = []
        for (var i = 0; i < 10; i++) {
            arr.push(
                <View key={i} style={{ width: "90%", height: 45, flexDirection: "row", }} >
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#f0a951", width: "10%", height: "100%", borderColor: "#250b02", borderWidth: 1 }}></TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.container}>



                <View style={styles.boxContainer} >
                    <View style={{ backgroundColor: "#250b02", padding: 10, borderRadius: 10 }} >
                        {arr}
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
        // borderRadius: 100,
        // width:"90%",
        // marginLeft: "8%",
        // marginRight: "8%"
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
        // paddingTop: 22,
        // paddingBottom: 22,
        // paddingLeft: 10,
        // paddingRight: 10,
        borderRadius: 1000,
        // borderColor: "#f0a951",
        // borderWidth: 1,
    }

});
