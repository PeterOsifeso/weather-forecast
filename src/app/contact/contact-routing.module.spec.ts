import { ContactRoutingModule } from './contact-routing.module';

describe('ContactRoutingModule', () => {
  let contactRoutingModule: ContactRoutingModule;

  beforeEach(() => {
    contactRoutingModule = new ContactRoutingModule();
  });

  it('should create an instance', () => {
    expect(contactRoutingModule).toBeTruthy();
  });
});
