import { Module } from '@nestjs/common';
import { ExemplaireService } from './services/exemplaire.service';
import { ExemplaireController } from './controllers/exemplaire.controller';
import { ExemplairePostEntity } from './models/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExemplairePostEntity])
  ],
  providers: [ExemplaireService],
  controllers: [ExemplaireController]
})
export class ExemplaireModule {}
