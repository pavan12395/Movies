import { transform } from '@babel/core';
import React from 'react';
import {Pressable,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class PlayButton extends React.PureComponent
{
     render()
     {
         const {onPress} = this.props;
        const {height} = Dimensions.get("screen");
        const styles=StyleSheet.create(
        {
             play:
             {
                 borderRadius:100,
                 backgroundColor:"#00A8E1",
                 width:70,
                 height:70,
                 flex:1,
                 justifyContent:"center",
                 alignItems:"center",
                 position:"absolute",
                 top:height*2/5,
                 right:10,
                 transform:[{translateY:-35}]
             }
        });
        return <Pressable style={styles.play} onPress={onPress}>
            <Icon name='play' size={50} color="white"/>
        </Pressable>
     }
}