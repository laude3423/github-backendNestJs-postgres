import { Module } from '@nestjs/common';
import { LivreService } from './services/livre.service';
import { LivreController } from './controllers/livre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrePostEntity } from './models/post.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([LivrePostEntity])
  ],
  providers: [LivreService],
  controllers: [LivreController]
})
export class LivreModule {}
