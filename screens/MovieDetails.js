import React,{useState} from 'react';
import {Text,StyleSheet,Image,Dimensions,View,ScrollView,Modal} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PlayButton from '../components/PlayButton';
import TrailerPlayer from '../components/TrailerPlayer';
import { setModalVisible } from '../redux/actions';
export default function MovieDetails({props})
{
    const {width,height} = Dimensions.get("screen");
    //const [modalVisible,setModalVisible] = useState(false);
    const {modal} = useSelector(state=>state.details);
    const dispatch = useDispatch();
    const styles=StyleSheet.create(
    {
             image:
             {
                 width:width,
                 height:height*2/5,
                 resizeMode:"cover"
             },
             title:
             {
                 fontWeight:"bold",
                 fontSize:30,
                 color:"black",
                 textAlign:"center",
                 textTransform:"capitalize",
                 marginTop:height*1/15
             },
             genreContainer:
             {
                 display:"flex",
                 justifyContent:"space-around",
                 alignItems:"flex-start",
                 flexDirection:"row",
                 marginTop:height*1/40,
                 marginBottom:height*1/40
             },
             genreText:
             {
                 color:"black",
                 fontSize:15,
                 textTransform:"capitalize",
                 padding:10,
                 backgroundColor:"grey",
                 borderRadius:15
             },
             description:
             {
                 fontSize:15,
                 color:"black",
                 marginLeft:10,
                 marginRight:10
             },
             releaseDate:
             {
                 padding:10
             },
             releaseText:
             {
                 fontWeight:"bold",
                 fontSize:20,
                 textAlign:"center",
                 color:"black"
             },
             modalView:
             {
                 textAlign:"center",
                 flex:1,
                 justifyContent:"center",
                 alignItems:"center"
             }
    });
    const {navigation,route} = props;
    const {_id,title,rating,image,description,genres,year} = props.route.params.movie;
    return(
        <ScrollView>
        <View>
        <Image source={{uri:image}} style={styles.image}></Image>
        <PlayButton onPress={()=>{dispatch(setModalVisible(true));}}></PlayButton>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.genreContainer}>
            {
               genres.map(genre=><Text style={styles.genreText}>{genre.uuid}</Text>)
            }
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.releaseDate}>
            <Text style={styles.releaseText}>Released in {year}</Text>
        </View>
        <View>
            <Modal animationType='slide' transparent={false} visible={modal} onRequestClose={()=>{dispatch(setModalVisible(false))}}>
              <TrailerPlayer movieId={_id} closeModal={()=>{dispatch(setModalVisible(false))}}/>
            </Modal>
        </View>
        </View>
        </ScrollView>
    )
}