import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LivrePost } from '../models/post.interface';
import { LivreService } from '../services/livre.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('livre')
@ApiTags("livre")
@ApiSecurity("JWT-auth")
export class LivreController {
    constructor(private LivreService:LivreService){}

    @Post()
    create(@Body() post:LivrePost){
        return this.LivreService.createdPost(post)
    }
    @Get()
    findAll():Observable<LivrePost[]>{
        return this.LivreService.findAllPosts();
    }
    @Put(':idLivre')
    update(
        @Param('idLivre') idLivre:number,
        @Body() LivrePost:LivrePost):Observable<UpdateResult>{
        return this.LivreService.updatePost(idLivre, LivrePost)
    }
    @Delete(':idLivre')
        delete(@Param('idLivre') idLivre:number):Observable<DeleteResult>{
            return this.LivreService.deletePost(idLivre);
        }

    @Get(':idLivreOrTitreLivre')
    async getLivre(@Param('idLivreOrTitreLivre') idLivreOrTitreLivre: string) {
      const livr = await this.LivreService.search(idLivreOrTitreLivre);
      if (!livr) {
        throw new NotFoundException('Livre not found');
      }
      return livr;
    }
}
