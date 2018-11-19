import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getModalLounchButton() {
    return element(by.css('.open-modal'));
  }

  getModalCancelButton() {
    return element(by.css('.cancel-button'));
  }

  getModal() {
    return element(by.css('.spread-modal'));
  }
}
