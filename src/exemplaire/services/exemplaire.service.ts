import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ExemplairePostEntity } from '../models/post.entity';
import { ExemplairePost } from '../models/post.interfaces';
import { Repository, UpdateResult } from 'typeorm';


@Injectable()
export class ExemplaireService {
    constructor(
        @InjectRepository(ExemplairePostEntity)
        private readonly ExemplairePostRepository: Repository<ExemplairePostEntity>
    ){}

    createdPost(exemplairePost: ExemplairePost):Observable<ExemplairePost>{
        return from(this.ExemplairePostRepository.save(exemplairePost));
    }

    findAllPosts():Observable<ExemplairePost[]>{
        return from(this.ExemplairePostRepository.find())
    }

    updatePost(idExemplaire: number,exemplairePost:ExemplairePost):Observable<UpdateResult>{
        return from(this.ExemplairePostRepository.update(idExemplaire,exemplairePost));
    }
    deletePost(idExemplaire: number){
        return from(this.ExemplairePostRepository.delete(idExemplaire));
    }
}
