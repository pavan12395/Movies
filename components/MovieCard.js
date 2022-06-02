import React from 'react';
import {View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
class MovieCard extends React.PureComponent
{
    render()
    {
         const {item,navigation} = this.props;
         const styles=StyleSheet.create(
         {
            text:
            {
                 textAlign:"center",
                 fontWeight:"bold",
                 fontSize:20,
                 color:"white",
                 padding:10
            },
            container:
            {
                flex:1,
                backgroundColor:"black",
                position:"relative",
                marginRight:20,
                borderRadius:10
            }
        });
        const touchHandler=()=>
        {
            navigation.navigate('Details',{movie:item});
        }
         return(
             <TouchableOpacity style={styles.container} onPress={touchHandler}>
                 <Image source={{uri:item.image}} style={{flex:1,width:250,height:300,resizeMode:"cover"}}></Image>
            </TouchableOpacity>
       );
    }
}

export default MovieCard;