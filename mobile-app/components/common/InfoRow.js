import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function InfoRow({

    label,
    value,

}) {

    return (

        <View style={styles.row}>

            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    row: {

        flexDirection: 'row',

        justifyContent: 'space-between',

        alignItems: 'center',

        marginTop: 12,

    },

    label: {

        color: colors.textSecondary,

        fontSize: 14,

    },

    value: {

        color: colors.white,

        fontSize: 15,

        fontWeight: '700',

    },

});