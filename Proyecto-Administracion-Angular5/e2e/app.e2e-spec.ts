import { ProyectoAdministracionAngular5Page } from './app.po';

describe('proyecto-administracion-angular5 App', function() {
  let page: ProyectoAdministracionAngular5Page;

  beforeEach(() => {
    page = new ProyectoAdministracionAngular5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
