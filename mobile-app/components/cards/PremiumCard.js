import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function PremiumCard({

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

    card: {

        backgroundColor: colors.card,

        borderRadius: 26,

        padding: 22,

        marginBottom: 18,

        borderWidth: 1,

        borderColor: colors.border,

        shadowColor: '#00D26A',

        shadowOpacity: 0.18,

        shadowRadius: 18,

        shadowOffset: {
            width: 0,
            height: 10,
        },

        elevation: 10,

    },

});