import { Module } from '@nestjs/common';
import { EmprunteurService } from './services/emprunteur.service';
import { EmprunteurController } from './controllers/emprunteur.controller';
import { EmprunteurPostEntity } from './models/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([EmprunteurPostEntity])
  ],
  providers: [EmprunteurService],
  controllers: [EmprunteurController],
})
export class EmprunteurModule {}
