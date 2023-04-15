import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { EmpruntPostEntity } from '../models/post.entity';
import { EmpruntPost } from '../models/post.interface';

@Injectable()
export class EmpruntService {
    constructor(
        @InjectRepository(EmpruntPostEntity)
        private readonly EmpruntPostRepository: Repository<EmpruntPostEntity>
    ){}

    createdPost(empruntPost: EmpruntPost):Observable<EmpruntPost>{
        return from(this.EmpruntPostRepository.save(empruntPost));
    }

    findAllPosts():Observable<EmpruntPost[]>{
        return from(this.EmpruntPostRepository.find())
    }

    updatePost(idEmprunt: number,empruntPost:EmpruntPost):Observable<UpdateResult>{
        return from(this.EmpruntPostRepository.update(idEmprunt,empruntPost));
    }
    deletePost(idEmprunt: number){
        return from(this.EmpruntPostRepository.delete(idEmprunt));
    }
    async search(query: string): Promise<EmpruntPost[]> {
        const val = parseInt(query, 10)
        if(isNaN(val)){
             const emprunt = await this.EmpruntPostRepository
            .createQueryBuilder('emprunt')
            .where('emprunt.DateEmprunt ILIKE :query', { query: String(`%${query}%`)})
            .getMany();

            return emprunt;
        }else{
            const emprunt = await this.EmpruntPostRepository
            .createQueryBuilder('emprunt')
            .orWhere('emprunt.idEmprunt = :idEmprunt', { idEmprunt: Number(query) })
            .getMany();

            return emprunt;
        }
        
      }
}
