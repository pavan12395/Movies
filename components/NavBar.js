import React from 'react';
import {View,Text,Pressable,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function NavBar({navigation})
{
    const dimensions=Dimensions.get("screen");
    const styles=StyleSheet.create(
        {
            navBar:
              {
                  flex:1,
                  width:dimensions.width*97/100,
                  position:"absolute",
                  zIndex:1,
                  flexDirection:"row",
                  justifyContent:"space-between",
                  alignItems:"center",
                  marginLeft:10,
                  marginRight:10
              },
              name:
                    {
                         fontWeight:"bold",
                         fontSize:50,
                         color:"white",
                         backgroundColor:"#00A8E1",
                         width:70,
                         height:70,
                         textAlign:"center",
                         borderRadius:35
                    }
        });
    return(
        <View style={styles.navBar}>
        <Text style={styles.name}>M</Text>
        <Pressable onPress={()=>{navigation.navigate("Search")}}>
          <Icon name={"search"} size={45} color="white"/>
        </Pressable>
        </View>
    );
}