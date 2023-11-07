import {AppiumDriver} from '../helpers/AppiumDriver';
import HomePage from '../screenObjects/HomePage';
import ModalPage from '../screenObjects/ModalPage';

describe('Home Navigation', () => {
  afterEach(async function () {
    await AppiumDriver.clean();
  });

  it('should display loremipsum text', async function () {
    await HomePage.getLoremIpsum();
  });

  it('should be able to open modal, tap user login, see greeting text & close modal', async function () {
    // TODO
  });
});
