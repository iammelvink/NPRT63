import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/colors';

export default function ScreenHeader({

  title,

  subtitle,

  showBack = true,

  rightComponent = null,

}) {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <View style={styles.leftContainer}>

        {showBack && (

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >

            <Text style={styles.backArrow}>
              ←
            </Text>

          </TouchableOpacity>

        )}

        <View>

          <Text style={styles.title}>
            {title}
          </Text>

          {

            subtitle ? (

              <Text style={styles.subtitle}>
                {subtitle}
              </Text>

            ) : null

          }

        </View>

      </View>

      {

        rightComponent

      }

    </View>

  );

}

const styles = StyleSheet.create({

  container:{

    flexDirection:'row',

    justifyContent:'space-between',

    alignItems:'center',

    marginBottom:25,

    marginTop:10,

  },

  leftContainer:{

    flexDirection:'row',

    alignItems:'center',

    flex:1,

  },

  backButton:{

    width:46,

    height:46,

    borderRadius:23,

    backgroundColor:colors.surface,

    justifyContent:'center',

    alignItems:'center',

    marginRight:15,

    borderWidth:1,

    borderColor:colors.border,

  },

  backArrow:{

    color:colors.white,

    fontSize:22,

    fontWeight:'800',

  },

  title:{

    color:colors.white,

    fontSize:30,

    fontWeight:'900',

  },

  subtitle:{

    color:colors.textSecondary,

    fontSize:14,

    marginTop:3,

  },

});