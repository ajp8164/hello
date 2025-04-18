import { fontSizes as defaultFontSizes, fontFamily, fontFamilyBold } from '@react-native-hello/ui';

import { Styles } from 'theme/types/Styles';
import { makeStyles } from '@rneui/themed';
import { Platform } from 'react-native';

export const fontFamilySecondary = 'Avenir-Next';

export const fontSizes = {
  ...defaultFontSizes,
  tiny: 10,
  small: 12,
  normal: 16,
  large: 18,
  XL: 20,
  heading1: 40,
  heading2: 32,
  heading3: 28,
  heading4: 24,
};

export const useStyles = () => {
  return makeStyles(
    (theme): Styles => ({
      /**
       * Platform
       */

      navigationBottomTabBar: {
        height: 83, // iOS constant for use outside of nav container
      },

      /**
       * Text
       */

      textHeading1: {
        color: theme.colors.text,
        lineHeight: 48,
        fontSize: fontSizes.heading1,
        ...Platform.select({
          android: {
            fontFamily: fontFamilyBold,
          },
          ios: {
            fontFamily,
            fontWeight: '700',
          },
        }),
      },
      textHeading2: {
        color: theme.colors.text,
        lineHeight: 36,
        fontSize: fontSizes.heading2,
        ...Platform.select({
          android: {
            fontFamily: fontFamilyBold,
          },
          ios: {
            fontFamily,
            fontWeight: '700',
          },
        }),
      },
      textHeading3: {
        color: theme.colors.text,
        lineHeight: 32,
        fontSize: fontSizes.heading3,
        ...Platform.select({
          android: {
            fontFamily: fontFamilyBold,
          },
          ios: {
            fontFamily,
            fontWeight: '700',
          },
        }),
      },
      textHeading4: {
        color: theme.colors.text,
        lineHeight: 32,
        fontSize: fontSizes.heading4,
        ...Platform.select({
          android: {
            fontFamily: fontFamilyBold,
          },
          ios: {
            fontFamily,
            fontWeight: '700',
          },
        }),
      },
      textXL: {
        color: theme.colors.text,
        lineHeight: 24,
        fontSize: fontSizes.xl,
        fontFamily,
        fontWeight: '600',
      },
      textLarge: {
        color: theme.colors.text,
        lineHeight: 24,
        fontSize: fontSizes.large,
        fontFamily,
        fontWeight: '400',
      },
      textNormal: {
        color: theme.colors.text,
        lineHeight: 24,
        fontSize: fontSizes.normal,
        fontFamily,
        fontWeight: '500',
      },
      textSmall: {
        color: theme.colors.text,
        lineHeight: 18,
        fontSize: fontSizes.small,
        fontFamily,
        fontWeight: '500',
      },
      textTiny: {
        color: theme.colors.text,
        lineHeight: 15,
        fontSize: fontSizes.tiny,
        fontFamily,
        fontWeight: '500',
      },

      /**
       * Text modifiers
       */

      textDim: {
        opacity: 0.5,
      },
      textPlaceholder: {
        opacity: 0.5,
      },
      textLink: {
        color: theme.colors.textLink,
        textDecorationLine: 'underline',
      },

      /**
       * Buttons
       */

      buttonContainer: {
        marginTop: 10,
      },
      buttonBottomContainer: {
        position: 'absolute',
        width: '100%',
        alignSelf: 'center',
        zIndex: 1,

        ...Platform.select({
          ios: {
            bottom: '10%',
          },
          android: {
            bottom: '5%',
          },
        }),
      },
      button: {
        backgroundColor: theme.colors.button,
        borderRadius: 10,
        height: 48,
        paddingHorizontal: 15,
        width: '100%',
        alignSelf: 'center',
      },
      buttonTitle: {
        fontSize: fontSizes.normal,
        fontFamily,
        color: theme.colors.buttonText,
        fontWeight: '600',
        ...Platform.select({
          ios: {
            marginTop: 0,
          },
          android: {
            marginTop: -2,
          },
        }),
      },
      buttonDisabled: {
        opacity: 0.4,
      },
      buttonOutline: {
        backgroundColor: theme.colors.transparent,
        borderColor: theme.colors.button,
        borderWidth: 2,
      },
      buttonOutlineTitle: {
        fontSize: fontSizes.normal,
        fontWeight: '400',
        fontFamily,
        color: theme.colors.button,
      },
      buttonOutlineDisabled: {
        backgroundColor: theme.colors.transparent,
        opacity: 0.4,
      },
      buttonScreenHeader: {
        backgroundColor: theme.colors.transparent,
        height: 40,
        paddingHorizontal: 0,
        minWidth: 0,
        justifyContent: 'flex-start',
      },
      buttonScreenHeaderTitle: {
        color: theme.colors.screenHeaderButtonText,
        fontSize: fontSizes.normal,
        fontFamily,
        ...Platform.select({
          ios: {
            marginTop: 0,
          },
          android: {
            marginTop: -2,
          },
        }),
      },
      buttonScreenHeaderDisabled: {
        backgroundColor: theme.colors.transparent,
        opacity: 0.4,
      },
      buttonInvScreenHeader: {
        backgroundColor: theme.colors.transparent,
        height: 40,
        paddingHorizontal: 0,
        minWidth: 0,
        justifyContent: 'flex-start',
      },
      buttonInvScreenHeaderTitle: {
        color: theme.colors.stickyWhite,
        fontSize: fontSizes.normal,
        fontFamily,
        ...Platform.select({
          ios: {
            marginTop: 0,
          },
          android: {
            marginTop: -2,
          },
        }),
      },
      buttonInvScreenHeaderDisabled: {
        backgroundColor: theme.colors.transparent,
        opacity: 0.4,
      },

      /**
       * List
       */

      listEmptyText: {
        fontSize: fontSizes.normal,
        fontFamily,
        color: theme.colors.textDim,
        textAlign: 'center',
        marginTop: 15,
      },

      /**
       * List Item
       */

      listItemContainer: {
        backgroundColor: theme.colors.listItem,
        borderColor: theme.colors.listItemBorder,
        paddingLeft: 15,
        overflow: 'hidden',
      },
      listItemBorder: {
        left: 15,
        right: 0,
        borderColor: theme.colors.listItemBorder,
      },
      listItemTitle: {
        color: theme.colors.text,
        fontSize: fontSizes.normal,
        fontFamily,
        minWidth: 150,
      },
      listItemSubtitle: {
        color: theme.colors.textDim,
        fontSize: fontSizes.small,
        fontFamily,
        fontWeight: 'normal',
      },
      listItemValue: {
        color: theme.colors.text,
        fontSize: fontSizes.normal,
        fontFamily,
        textAlign: 'right',
      },

      /**
       * Views
       */

      view: {
        height: '100%',
        backgroundColor: theme.colors.viewBackground,
      },

      viewAlt: {
        height: '100%',
        backgroundColor: theme.colors.viewAltBackground,
      },
    }),
  )();
};
