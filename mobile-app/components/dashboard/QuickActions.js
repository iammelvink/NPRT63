import React from 'react';

import {

View,

TouchableOpacity,

Text,

StyleSheet,

} from 'react-native';

import colors from '../../theme/colors';

export default function QuickActions(){

return(

<View style={styles.container}>

<TouchableOpacity style={styles.button}>

<Text style={styles.text}>Directions</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.button}>

<Text style={styles.text}>Reviews</Text>

</TouchableOpacity>

</View>

);

}

const styles=StyleSheet.create({

container:{

flexDirection:'row',

justifyContent:'space-between',

marginTop:20,

},

button:{

flex:1,

backgroundColor:colors.secondary,

padding:16,

borderRadius:16,

marginHorizontal:5,

alignItems:'center',

},

text:{

fontWeight:'700',

color:'#fff',

},

});