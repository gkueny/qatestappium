import {AppiumDriver} from '../helpers/AppiumDriver';
import HomePage from '../screenObjects/HomePage';

describe('Home Navigation', () => {
  afterEach(async function () {
    await AppiumDriver.clean();
  });

  it('should display loremipsum text', async function () {
    await HomePage.getLoremIpsum();
  });

  it('should be able to open modal, see information, tap user login & see greeting text', async function () {
    // TODO
  });
});
