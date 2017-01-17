import { CarrotAndStickPage } from './app.po';

describe('carrot-and-stick App', function() {
  let page: CarrotAndStickPage;

  beforeEach(() => {
    page = new CarrotAndStickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
