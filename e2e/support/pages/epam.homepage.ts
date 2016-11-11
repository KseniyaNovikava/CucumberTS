
import { browser } from 'protractor';

export class EpamHomePage {
  static title = 'EPAM | Software Product Development Services';

  static openPage() : any {
    browser.get('https://www.epam.com/');
  }
}
