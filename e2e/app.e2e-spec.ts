import { AuctionsPage } from './app.po';

describe('auctions App', () => {
  let page: AuctionsPage;

  beforeEach(() => {
    page = new AuctionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
