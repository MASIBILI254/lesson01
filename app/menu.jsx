import { StyleSheet,platform,SafeAreaView, ScrollView, FlatList,View,Text,Image } from "react-native";
import {menuItems} from "@/constants/menuItems"
import menuImages from "@/constants/menuImages"
export default function MenuScreen(){
const Container = platform.os ==='web'? ScrollView:SafeAreaView;
return(
   <Container>
        <FlatList
            data={menuItems}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    <Image source={menuImages[item.id-1]}/>
                </View>

            )}
        />
   </Container>
)
}