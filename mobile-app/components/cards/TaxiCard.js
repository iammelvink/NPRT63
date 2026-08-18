import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import PremiumCard from './PremiumCard';
import InfoRow from '../common/InfoRow';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

import colors from '../../theme/colors';

export default function TaxiCard({

    taxi,
    onEdit,
    onAssignDriver,

}) {

    function getStatusColor() {

        switch (taxi.status) {

            case 'Active':
                return '#00D26A';

            case 'Waiting':
                return '#F5B700';

            case 'Offline':
                return '#FF4D4D';

            default:
                return colors.primary;

        }

    }

    return (

        <PremiumCard>

            <View style={styles.header}>

                <View>

                    <Text style={styles.icon}>
                        🚖
                    </Text>

                    <Text style={styles.registration}>
                        {taxi.registration}
                    </Text>

                </View>

                <View
                    style={[
                        styles.statusBadge,
                        {
                            backgroundColor: getStatusColor(),
                        },
                    ]}
                >

                    <Text style={styles.statusText}>
                        {taxi.status}
                    </Text>

                </View>

            </View>

            <InfoRow
                label="Driver"
                value={taxi.driverName || 'Not Assigned'}
            />

            <InfoRow
                label="Taxi Rank"
                value={taxi.rank}
            />

            <InfoRow
                label="Capacity"
                value={`${taxi.capacity} Seater`}
            />

            <InfoRow
                label="Queue Position"
                value={
                    taxi.queuePosition
                        ? `#${taxi.queuePosition}`
                        : '-'
                }
            />

            <View style={styles.buttons}>

                <PrimaryButton
                    title="EDIT"
                    onPress={() => onEdit(taxi)}
                />

                <View style={styles.space} />

                <SecondaryButton
                    title="ASSIGN DRIVER"
                    onPress={() => onAssignDriver(taxi)}
                />

            </View>

        </PremiumCard>

    );

}

const styles = StyleSheet.create({

    header: {

        flexDirection: 'row',

        justifyContent: 'space-between',

        alignItems: 'center',

        marginBottom: 18,

    },

    icon: {

        fontSize: 34,

    },

    registration: {

        color: colors.white,

        fontSize: 22,

        fontWeight: '900',

        marginTop: 8,

    },

    statusBadge: {

        paddingHorizontal: 14,

        paddingVertical: 7,

        borderRadius: 20,

    },

    statusText: {

        color: '#fff',

        fontWeight: '700',

    },

    buttons: {

        marginTop: 25,

    },

    space: {

        height: 10,

    },

});