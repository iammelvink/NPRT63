import React from 'react';

import {

    View,

    StyleSheet,

} from 'react-native';

import colors from '../../theme/colors';

export default function PrimaryCard({

    children,

    style,

}) {

    return (

        <View

            style={[

                styles.card,

                style,

            ]}

        >

            {children}

        </View>

    );

}

const styles = StyleSheet.create({

    card:{

        backgroundColor:colors.card,

        borderRadius:24,

        padding:20,

        borderWidth:1,

        borderColor:colors.border,

        shadowColor:colors.shadow,

        shadowOpacity:0.20,

        shadowRadius:20,

        shadowOffset:{

            width:0,

            height:10,

        },

        elevation:8,

    },

});