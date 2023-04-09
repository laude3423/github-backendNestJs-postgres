import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { EmprunteurPostEntity } from '../models/post.entity';
import { EmprunteurPost } from '../models/post.interface';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class EmprunteurService {
    constructor(
        @InjectRepository(EmprunteurPostEntity)
        private readonly EmprunteurPostRepository: Repository<EmprunteurPostEntity>
    ){}

    createdPost(emprunteurPost: EmprunteurPost):Observable<EmprunteurPost>{
        return from(this.EmprunteurPostRepository.save(emprunteurPost));
    }

    findAllPosts():Observable<EmprunteurPost[]>{
        return from(this.EmprunteurPostRepository.find())
    }

    updatePost(idEmprunteur: number,emprunteurPost:EmprunteurPost):Observable<UpdateResult>{
        return from(this.EmprunteurPostRepository.update(idEmprunteur,emprunteurPost));
    }
    deletePost(idEmprunteur: number){
        return from(this.EmprunteurPostRepository.delete(idEmprunteur));
    }
}
