import { StyleSheet } from 'react-native';
import colors from './colors';
import spacing from './spacing';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    padding: spacing.lg,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLarge,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
});

export default styles;