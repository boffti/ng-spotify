import { NgSpotifyPage } from './app.po';

describe('ng-spotify App', function() {
  let page: NgSpotifyPage;

  beforeEach(() => {
    page = new NgSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
