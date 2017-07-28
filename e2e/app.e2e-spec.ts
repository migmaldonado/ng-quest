import { NgQuestPage } from './app.po';

describe('ng-quest App', function() {
  let page: NgQuestPage;

  beforeEach(() => {
    page = new NgQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
