import { AlburghlibraryPage } from './app.po';

describe('alburghlibrary App', () => {
  let page: AlburghlibraryPage;

  beforeEach(() => {
    page = new AlburghlibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
