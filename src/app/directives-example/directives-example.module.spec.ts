import { DirectivesExampleModule } from './directives-example.module';

describe('DirectivesExampleModule', () => {
  let directivesExampleModule: DirectivesExampleModule;

  beforeEach(() => {
    directivesExampleModule = new DirectivesExampleModule();
  });

  it('should create an instance', () => {
    expect(directivesExampleModule).toBeTruthy();
  });
});
