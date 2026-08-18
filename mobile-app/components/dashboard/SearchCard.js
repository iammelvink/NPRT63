import React from 'react';
import {
View,
Text,
TouchableOpacity,
StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function SearchCard({

onPress,

}){

return(

<TouchableOpacity

activeOpacity={0.9}

style={styles.card}

onPress={onPress}

>

<Text style={styles.title}>

🔍 Where are you travelling?

</Text>

<Text style={styles.subtitle}>

Search destinations and nearby taxi ranks

</Text>

</TouchableOpacity>

);

}

const styles=StyleSheet.create({

card:{

backgroundColor:colors.primary,

borderRadius:22,

padding:22,

marginBottom:22,

},

title:{

fontSize:19,

fontWeight:'800',

color:'#fff',

},

subtitle:{

marginTop:8,

color:'#fff',

opacity:0.9,

},

});