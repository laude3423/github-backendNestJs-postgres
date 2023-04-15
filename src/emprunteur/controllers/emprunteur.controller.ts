import { Body, Controller, Delete, NotFoundException, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmprunteurPost } from '../models/post.interface';
import { EmprunteurService } from '../services/emprunteur.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('emprunteur')
export class EmprunteurController {
    constructor(private EmprunteurService:EmprunteurService){}

    @Post()
    create(@Body() post:EmprunteurPost){
        return this.EmprunteurService.createdPost(post)
    }
    @Get()
    findAll():Observable<EmprunteurPost[]>{
        return this.EmprunteurService.findAllPosts();
    }
    @Put(':idEmprunteur')
    update(
        @Param('idEmprunteur') idEmprunteur:number,
        @Body() EmprunteurPost:EmprunteurPost):Observable<UpdateResult>{
        return this.EmprunteurService.updatePost(idEmprunteur, EmprunteurPost)
    }
    @Delete(':idEmprunteur')
        delete(@Param('idEmprunteur') idEmprunteur:number):Observable<DeleteResult>{
            return this.EmprunteurService.deletePost(idEmprunteur);
        }
    @Get(':idEmpruntOrNomEmprunteur')
    async getEmprunteur(@Param('idEmpruntOrNomEmprunteur') idEmpruntOrNomEmprunteur: string) {
      const emprunteur = await this.EmprunteurService.search(idEmpruntOrNomEmprunteur);
      if (!emprunteur) {
        throw new NotFoundException('Emprunteur not found');
      }
      return emprunteur;
    }
}
