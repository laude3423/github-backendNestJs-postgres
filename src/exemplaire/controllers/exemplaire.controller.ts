import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ExemplairePost } from '../models/post.interfaces';
import { ExemplaireService } from '../services/exemplaire.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('exemplaire')
export class ExemplaireController {
    constructor(private ExemplaireService:ExemplaireService){}

    @Post()
    create(@Body() post:ExemplairePost){
        return this.ExemplaireService.createdPost(post)
    }
    @Get()
    findAll():Observable<ExemplairePost[]>{
        return this.ExemplaireService.findAllPosts();
    }
    @Put(':idExemplaire')
    update(
        @Param('idExemplaire') idExemplaire:number,
        @Body() ExemplairePost:ExemplairePost):Observable<UpdateResult>{
        return this.ExemplaireService.updatePost(idExemplaire, ExemplairePost)
    }
    @Delete(':idExemplaire')
        delete(@Param('idExemplaire') idExemplaire:number):Observable<DeleteResult>{
            return this.ExemplaireService.deletePost(idExemplaire);
        }
}
