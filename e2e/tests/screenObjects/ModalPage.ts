import {AppiumDriver} from '../helpers/AppiumDriver';

class ModalPage {
  async getModalContainer() {
    return AppiumDriver.findElementById('modal');
  }
}

export default new ModalPage();
