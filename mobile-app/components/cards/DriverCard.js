import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import colors from '../../theme/colors';

export default function DriverCard({

  driver,

  onEdit,

  onDelete,

}) {

  return (

    <View style={styles.card}>

      <View style={styles.header}>

        <View style={styles.avatar}>

          <Ionicons
            name="person"
            size={28}
            color={colors.primary}
          />

        </View>

        <View style={styles.info}>

          <Text style={styles.name}>

            {driver.fullName}

          </Text>

          <Text style={styles.phone}>

            {driver.cellphone}

          </Text>

        </View>

      </View>

      <View style={styles.divider} />

      <View style={styles.assignmentContainer}>

        <Text style={styles.assignmentLabel}>

          Assigned Taxi

        </Text>

        <Text style={styles.assignmentValue}>

          {

            driver.assignedTaxi

              ? driver.assignedTaxi

              : 'Not Assigned'

          }

        </Text>

      </View>

      <View style={styles.actions}>

        <TouchableOpacity

          style={styles.editButton}

          activeOpacity={0.8}

          onPress={() => onEdit(driver)}

        >

          <Ionicons

            name="create-outline"

            size={18}

            color={colors.white}

          />

          <Text style={styles.buttonText}>

            Edit

          </Text>

        </TouchableOpacity>

        <TouchableOpacity

          style={styles.deleteButton}

          activeOpacity={0.8}

          onPress={() => onDelete(driver)}

        >

          <Ionicons

            name="trash-outline"

            size={18}

            color={colors.white}

          />

          <Text style={styles.buttonText}>

            Delete

          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: colors.surface,

    borderRadius: 18,

    padding: 18,

    marginBottom: 18,

    borderWidth: 1,

    borderColor: colors.border,

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: colors.background,

    justifyContent: 'center',

    alignItems: 'center',

  },

  info: {

    marginLeft: 15,

    flex: 1,

  },

  name: {

    color: colors.white,

    fontSize: 18,

    fontWeight: '800',

  },

  phone: {

    marginTop: 5,

    color: colors.textSecondary,

    fontSize: 14,

  },

  divider: {

    height: 1,

    backgroundColor: colors.border,

    marginVertical: 18,

  },

  assignmentContainer: {

    marginBottom: 20,

  },

  assignmentLabel: {

    color: colors.placeholder,

    fontSize: 13,

  },

  assignmentValue: {

    marginTop: 6,

    color: colors.white,

    fontWeight: '700',

    fontSize: 16,

  },

  actions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  editButton: {

    flex: 1,

    backgroundColor: colors.primary,

    borderRadius: 12,

    paddingVertical: 12,

    marginRight: 8,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

  },

  deleteButton: {

    flex: 1,

    backgroundColor: '#E53935',

    borderRadius: 12,

    paddingVertical: 12,

    marginLeft: 8,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

  },

  buttonText: {

    color: colors.white,

    fontWeight: '700',

    marginLeft: 8,

    fontSize: 14,

  },

});