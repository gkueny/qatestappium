import {AppiumDriver} from '../helpers/AppiumDriver';

class HomePage {
  async getLoremIpsum() {
    return AppiumDriver.findElementById('loremipsumText');
  }
}

export default new HomePage();
