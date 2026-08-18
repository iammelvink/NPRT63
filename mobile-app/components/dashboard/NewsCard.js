import React from 'react';

import {
View,
Text,
StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function NewsCard({

news,

}){

return(

<View style={styles.card}>

<Text style={styles.title}>

Latest News

</Text>

<Text style={styles.text}>

{news[0]?.title}

</Text>

</View>

);

}

const styles=StyleSheet.create({

card:{

marginTop:18,

backgroundColor:colors.surface,

borderRadius:20,

padding:20,

borderWidth:1,

borderColor:colors.border,

},

title:{

fontSize:18,

fontWeight:'800',

color:colors.white,

marginBottom:10,

},

text:{

color:colors.textSecondary,

lineHeight:22,

},

});