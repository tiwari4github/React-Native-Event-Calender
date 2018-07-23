/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView } from 'react-native';
import moment from "moment";
import EventCard from "./EventCard";

type Props = {};
export default class CalenderContainer extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            Dates:[],
            month:'',
            index:0,
        };

    }

    componentWillMount(){
        var date = new Date();
        y = date.getFullYear();
        m = date.getMonth();
        //Set the Current Month
        this.setState({month:m})

        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);

        var first = moment(firstDay).format('DD');
        firstDay = moment(firstDay).format('MM/DD/YY');
        var dateofyear=moment(firstDay).format('DD/MM/YY');

        last = moment(lastDay).format('DD');

        //This Loop Will set the all dates of Currents Months in Dates[] array
        for(var i=1;i<=last;i++){
            let weekday=moment(firstDay).format('ddd').toUpperCase();
            let actual_date=moment(firstDay).format('DD')
            this.state.Dates.push({actual_date,weekday})
            firstDay = new Date(y, m, i);
            firstDay = moment(firstDay).add(1, 'days').format('MM/DD/YY');
        }
    }

    render() {
        const months = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        const currentIndex=this.state.index;
        const interval1=[ '7:15 am','7:30 am','7:45 am','8:00 am','8:15 am',];
        const interval2=['8:30 am','8:45 am','9:00 am','9:15 am','9:30 am'];
        const interval3=['9:45 am','10:00 am','10:15 am','10:30 am','10:45 am'];
        const interval4=['11:00 am','11:15 am','11:30 am','11:45 am','12:00 pm'];
        const interval5=['12:15 pm','12:30 pm','12:45 pm','1:00 pm','1:15 pm'];
        const interval6=['1:30 pm','1:45 pm','2:00 pm','2:15 pm','2:30 pm']

        const pages = [interval1, interval2, interval3, interval4,interval5,interval6]
        return (
            <View style={styles.container}>

                <View style={{marginTop:10}}>

                    {/*Month Name*/}
                    <View style={styles.monthStyle}>
                        <Text style={styles.monthText}>
                            {months[this.state.month]}
                        </Text>
                    </View>


                    {/*Prev and Next Button*/}
                    <View style={styles.buttonContainer}>
                        <View>
                            { this.state.index!=0 &&
                            <TouchableOpacity onPress={()=>{this.setState({index:currentIndex-1})}}>
                                <View style={styles.activeButton}>
                                    <Text style={{fontSize:14,alignSelf:'center',fontFamily:'Avenir'}}>Prev</Text>
                                </View>
                            </TouchableOpacity>}
                            { this.state.index==0 &&
                            <View style={styles.inactiveButton}>
                                <Text style={{fontSize:14,alignSelf:'center',fontFamily:'Avenir'}}>Prev</Text>
                            </View> }
                        </View>
                        <View>
                            { this.state.index!=pages.length-1 &&
                            <TouchableOpacity onPress={()=>{this.setState({index:currentIndex+1})}}>
                                <View style={styles.activeButton}>
                                    <Text style={{fontSize:14,alignSelf:'center',fontFamily:'Avenir'}}>Next</Text>
                                </View>
                            </TouchableOpacity>}
                            { this.state.index==pages.length-1 &&
                            <View style={styles.inactiveButton}>
                                <Text style={{fontSize:14,alignSelf:'center',fontFamily:'Avenir'}}>Next</Text>
                            </View>}
                        </View>
                    </View>
                </View>

                <View style={{flex:1,}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <View style={{width:50,justifyContent:'center',backgroundColor:'lightgreen'}}>
                            <Text>
                            Interval
                            </Text>
                        </View>
                        <EventCard interval={pages[this.state.index]}/>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{flex:1,}}>
                            {this.state.Dates.map((data) =>  <View style={{flexDirection:'row'}}>
                                <View style={styles.dateStyle}>
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data.actual_date}</Text>
                                    <Text style={{fontSize:12}}>{data.weekday}</Text>
                                </View>

                                {/*Change this According your need */}

                                <EventCard interval={pages[this.state.index]}/>

                            </View>)}
                        </View>
                    </ScrollView>

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEDC8',
    },
    monthStyle:{
        height:50,
        width:150,
        backgroundColor:'lightgrey',
        justifyContent:'center',
        margin:10,
        borderRadius:25,
    },
    monthText:{
        fontSize:25,
        alignSelf:'center',
        fontFamily:'Avenir'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:100,
    },
    inactiveButton:{
        height:40,
        width:50,
        backgroundColor:'white',
        justifyContent:'center',
        margin:20,
        borderRadius:5,
    },
    activeButton:{
        height:40,
        width:50,
        backgroundColor:'lightgrey',
        justifyContent:'center',
        margin:20,
        borderRadius:5,
    },
    dateStyle:{
        height:60,
        width:50,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1/2
    }

});