import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('modal should correctly open', () => {
    page.navigateTo();
    page.getModalLounchButton().click();
    browser.sleep(1500);

    page.getModal().getSize().then((elSize) => {
      browser.manage().window().getSize().then((size) => {
        expect(elSize.width).toBeGreaterThan(200);
        expect(elSize.width).toBeCloseTo(size.width, -2);
      });

    });

  });


  it('modal should correctly close', () => {
    page.getModalCancelButton().click();
    browser.sleep(1500);
    
    page.getModal().getSize().then((elSize) => {
      browser.manage().window().getSize().then((size) => {
        expect(elSize.width).toBe(0);
        expect(elSize.height).toBe(0);
      });

    });
  });
});
