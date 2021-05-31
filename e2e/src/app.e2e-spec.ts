import { browser, logging, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('shoud be empty', async () => {
    await page.navigateTo();
    expect(await page).toEqual(new AppPage());
  });

  it('should render a button and a label', async () => {
    await page.navigateTo();
    page.setInputJson();
    await page.clickGenerate();
    browser.sleep(1000);
    let button = await page.getElementByText('button', 'Button');
    let label = await page.getElementByText('mat-card', 'Label');

    expect([button,label]).toEqual(['Button', 'Label']);
  });

  it('should navigate to results page', async () => {
    await page.navigateTo();
    page.setInputJson();
    await page.clickGenerate();
    browser.sleep(1000);
    let url = await page.getURL();
    expect(url).toMatch('http://localhost:4200/result');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
