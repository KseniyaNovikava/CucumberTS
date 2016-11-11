import { browser} from 'protractor';

export class BrowserHelper {

  static scrollIntoView (el) {
    return browser.executeScript('arguments[0].scrollIntoView(true);', el.getWebElement());
  }

}