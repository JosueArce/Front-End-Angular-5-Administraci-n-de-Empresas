import { ProyectoAcreditacionAngular5Page } from './app.po';

describe('proyecto-acreditacion-angular5 App', function() {
  let page: ProyectoAcreditacionAngular5Page;

  beforeEach(() => {
    page = new ProyectoAcreditacionAngular5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
