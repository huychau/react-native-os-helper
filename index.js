import { Dimensions, Platform } from 'react-native';


/**
 * iOS
 * =============================================================================
 */
const iPhoneXHeight = 812;
const iPhoneXRHeight = 896;

/**
 * Check Platform OS is iOS
 */
export const isIOS = Platform.OS === 'ios';

/**
 * Check is iPhone
 */
export const isIPhone = isIOS && !Platform.isPad && !Platform.isTVOS;


/**
 * Check is iPhone X size. For iPhone X and XS have 812px height
 * @param {Object} dim Dimensions
 */
export function isIPhoneXSize(dim) {
  return dim.height == iPhoneXHeight || dim.width == iPhoneXHeight;
}

/**
 * Check is iPhone XR size. For iPhone XS Max and XR have 896px height.
 * @param {Object} dim Dimensions
 */
export function isIPhoneXRSize(dim) {
  return dim.height == iPhoneXRHeight || dim.width == iPhoneXRHeight;
}

/**
 * Check is iPhoneX device
 */
export function isIphoneX() {
  const dim = Dimensions.get('window');
  return (
    isIPhone && (isIPhoneXSize(dim) || isIPhoneXRSize(dim))
  );
}


/**
 * Android
 * =============================================================================
 */

/**
 * Check Platform OS is Android
 */
export const isAndroid = Platform.OS === 'android';
