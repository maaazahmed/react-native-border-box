import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"


export default class Game extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxContainer} ></View>
                <View style={styles.statusContainer}>

                    <View style={{ flex: 1, backgroundColor: "white", borderColor:"green", borderWidth:1 }} >



                    
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
                                <Text style={[styles.buttonText, { color: "#250b02", fontSize: 20 }]} >X</Text>
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


                    <View style={{ flex: 1, backgroundColor: "white" }}></View>

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
        // flex: 5,
        height:"80%"
    },
    statusContainer: {
        backgroundColor: "#250b02",
        flex: 1,
        height:"20%",
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
        borderRadius: 100,
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
        marginRight:5
    },

    leftButton: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        alignItems: "flex-start",
        marginLeft:5

    },


    downButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cancelButn:{
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
