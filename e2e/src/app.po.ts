import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async setInputJson(): Promise<unknown> {
    return element(by.css('#mainTextArea')).sendKeys(`{
      "controls": [
      {
      "type": "Button",
      "x": 10,
      "y": 20,
      "width": 80,
      "height": 40,
      "text": "Button"
      },
      {
      "type": "Label",
      "x": 10,
      "y": 60,
      "width": 80,
      "height": 40,
      "text": "Label"
      }
      ]
     }`);
    //  element(by.id('generateButton')).set
  }

  async clickGenerate(): Promise<unknown> {
    return element(by.id('generateButton')).click();
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getURL(): Promise<string> {
    return browser.getCurrentUrl();
  }

  async getButtonName(): Promise<string> {
    return element(by.id('generateButton')).getText();
  }

  async getButtonStatus(): Promise<boolean> {
    return element(by.id('generateButton')).isEnabled();
  }

  async getElementByText(type: string, txt: string): Promise<string> {
    return element(by.cssContainingText(type, txt)).getText();
  }
}
