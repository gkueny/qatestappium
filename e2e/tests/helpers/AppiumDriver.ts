/**
 * Taken from https://github.com/bamlab/android-performance-profiler/blob/main/packages/appium-helper/AppiumDriver.ts
 */

export interface RemoteServerOptions {
  hostName?: string;
}

export const TWO_MINUTES = 120000;

export class AppiumDriver {
  static async clean() {
    await driver.reset();
  }

  static async wait(delay: number) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  static async waitForElement(
    element: WebdriverIO.Element,
    timeout: number = 3000,
  ) {
    await element.waitForExist({timeout: timeout, interval: 250});
    await element.waitForDisplayed({timeout: timeout, interval: 250});
  }

  static xpathByResourceId(id: string) {
    if (process.env.CONFIG === 'ios') {
      return `//*[@name="${id}"]`;
    }
    return `//*[contains(@resource-id, "${id}")]`;
  }

  static xpathByText(text: string) {
    return `//android.widget.TextView[@text="${text}"]`;
  }

  static xpathByResourceAccessibleId(id: string) {
    return `~${id}`;
  }

  static async findElementByText(text: string) {
    const element = await $(AppiumDriver.xpathByText(text));
    await AppiumDriver.waitForElement(element);

    return element;
  }

  static async findElementById(testID: string) {
    const element = await $(this.xpathByResourceId(testID));

    await AppiumDriver.waitForElement(element);

    return element;
  }

  static async findElementByAccessibleId(testID: string) {
    return $(this.xpathByResourceAccessibleId(testID));
  }

  static async findElementByXPath(xpath: string) {
    const element = await $(xpath);

    await AppiumDriver.waitForElement(element);

    return element;
  }
}
