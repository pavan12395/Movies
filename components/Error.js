import React from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
class Error extends React.PureComponent
{
    render()
    {
        const {height,width} = Dimensions.get("screen");
        const styles=StyleSheet.create(
            {
                text:
                {
                    fontSize:20,
                    fontWeight:"bold",
                    color:"white"
                },
                container:
                {
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"red"
                }
            }
        )
        const {message} = this.props;
        return(
            <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            </View>
        )
    }
}

export default Error;