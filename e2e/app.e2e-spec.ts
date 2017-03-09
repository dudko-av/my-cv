import { MyCvPage } from './app.po';

describe('my-cv App', function() {
  let page: MyCvPage;

  beforeEach(() => {
    page = new MyCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
