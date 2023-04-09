import { Module } from '@nestjs/common';
import { EmpruntService } from './services/emprunt.service';
import { EmpruntController } from './controllers/emprunt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpruntPostEntity } from './models/post.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([EmpruntPostEntity])
  ],
  providers: [EmpruntService],
  controllers: [EmpruntController]
})
export class EmpruntModule {}
