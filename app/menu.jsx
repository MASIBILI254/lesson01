import { StyleSheet,Platform,SafeAreaView, ScrollView, FlatList,View,Text,Image } from "react-native";
import {MenuItems} from "@/constants/menuItems"
import menuImages from "@/constants/menuImages"
export default function MenuScreen(){
const Container = Platform.OS ==='web'? ScrollView:SafeAreaView;
const separatecomp = < View style={styles.seperate}/>
return(
   <Container style={styles.Container}>
        <FlatList
            data={MenuItems}
            keyExtractor={(item)=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={separatecomp}
            renderItem={({item})=>(
                <View style={styles.row}>
                    <View style={styles.MenuTextRow}>
                        <Text style={styles.MenuItemTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    <Image source={menuImages[item.id-1]} style={styles.menuImage}/>
                </View>

            )}
        />
   </Container>
)
}

const styles = StyleSheet.create({
    Container:{
        paddingTop:10,
        paddingBottom:20,
        paddingHorizontal:12,
        backgroundColor:'gray'
    },
    seperate:{
        height:1,
        backgroundColor:"papayawhip",
        width:"50%",
        maxWidth:300,
        marginHorizontal:"auto",
        marginBottom:10
    },
    row:{
        flexDirection:'row',
        width:"100%",
        maxWidth:600,
        height:100,
        marginBottom:10,
        borderStyle:'solid',
        borderRadius:20,
        borderColor:'white',
        borderWidth:1,
        overflow:'hidden',
        marginHorizontal:'auto'
    },
    MenuTextRow:{
        width:'65%',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:5,
        flexGrow:1,
        backgroundColor:'orange'
    },
    MenuItemTitle:{
        fontSize:18,
        textDecorationLine:'underline'
    },
    menuImage:{
        width:100,
        height:100
    }
})