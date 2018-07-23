import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,FlatList
} from 'react-native';
import type Moment from 'moment';

export default class EventCard extends Component {



    render() {
        const {interval}=this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    bounces={false}
                    data={interval}
                    renderItem={({item}) =><View style={styles.cardStyle}>
                        <Text style={{fontSize:12,}}>{item}</Text>
                    </View>
                    }/>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFEDC8',
        flexDirection:'row',
    },
    cardStyle:{
        height:60,
        width:60,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1/2,
        marginRight:5
    }


};