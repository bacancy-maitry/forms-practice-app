import { ModelDrivenFormModule } from './model-driven-form.module';

describe('ModelDrivenFormModule', () => {
  let modelDrivenFormModule: ModelDrivenFormModule;

  beforeEach(() => {
    modelDrivenFormModule = new ModelDrivenFormModule();
  });

  it('should create an instance', () => {
    expect(modelDrivenFormModule).toBeTruthy();
  });
});
