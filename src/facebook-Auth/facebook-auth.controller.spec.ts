import { Test, TestingModule } from '@nestjs/testing';
import { FaceBookAuthController } from './facebook-auth.controller';

describe('FaceBookAuthController', () => {
  let controller: FaceBookAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaceBookAuthController],
    }).compile();

    controller = module.get<FaceBookAuthController>(FaceBookAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
