import {join} from 'path';

import config from './wdio.shared.appium.conf';

// ============
// Specs
// ============
config.specs = [['./tests/specs/*.spec.ts']];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': process.env.EMULATOR_NAME || 'pixel_4',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    // The path to the app
    'appium:app': join(process.cwd(), './app/app-release.apk'),
    'appium:appPackage': 'com.qatest',
    'appium:appWaitActivity': 'com.qatest.MainActivity',
    'appium:newCommandTimeout': 3000,
    'appium:autoAcceptAlerts': true,
    //@ts-ignore
    'appium:autoGrantPermissions': true,
    'appium:fullReset': true,
    'appium:noReset': false,
  },
];

exports.config = config;
