import { Dimensions, Platform } from 'react-native';

/**
 * Check Platform OS is iOS
 */
export const isIOS = Platform.OS === 'ios';

/**
 * Check is iPhone
 */
export const isIPhone = isIOS && !Platform.isPad && !Platform.isTVOS;


/**
 * Check is iPhoneX device
 */
export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        isIPhone &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

/**
 * Check Platform OS is Android
 */
export const isAndroid = Platform.OS === 'android';
