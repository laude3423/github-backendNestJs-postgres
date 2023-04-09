import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmpruntPost } from '../models/post.interface';
import { EmpruntService } from '../services/emprunt.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('emprunt')
export class EmpruntController {
    constructor(private EmpruntService:EmpruntService){}

    @Post()
    create(@Body() post:EmpruntPost){
        return this.EmpruntService.createdPost(post)
    }
    @Get()
    findAll():Observable<EmpruntPost[]>{
        return this.EmpruntService.findAllPosts();
    }
    @Put(':idEmprunt')
    update(
        @Param('idEmprunt') idEmprunt:number,
        @Body() EmpruntPost:EmpruntPost):Observable<UpdateResult>{
        return this.EmpruntService.updatePost(idEmprunt, EmpruntPost)
    }
    @Delete(':idEmprunt')
        delete(@Param('idEmprunt') idEmprunt:number):Observable<DeleteResult>{
            return this.EmpruntService.deletePost(idEmprunt);
        }
}
