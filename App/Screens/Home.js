import React, {Component} from 'react';
import {
    Alert, Text, View, TouchableOpacity, TextInput
} from 'react-native';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            room_id: '',
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#ffffff', flex: 1, alignItems:'center',paddingTop:20,textAlign:'center'}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray'}}
                    onChangeText={(room_id) => this.setState({room_id})}
                    value={this.state.room_id}
                    placeholder={"Masukan id room"}
                />
                <TouchableOpacity onPress={()=>{
                    (this.state.room_id==='' || this.state.room_id===null)
                        ? Alert.alert("Alert","ID Room tidak boleh kosong")
                        : this.props.navigation.navigate("videoService",{'room_id':this.state.room_id})

                }}>
                    <View style={{width:100, backgroundColor:'#4F83CC', padding:10, textAlign:'center', alignItems:'center'}}>
                        <Text>Join</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
