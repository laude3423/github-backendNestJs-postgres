import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { LivrePostEntity } from '../models/post.entity';
import { LivrePost } from '../models/post.interface';
import { Repository, UpdateResult,FindOperator  } from 'typeorm';

@Injectable()
export class LivreService {
    constructor(
        @InjectRepository(LivrePostEntity)
        private readonly LivrePostRepository: Repository<LivrePostEntity>
    ){}

    createdPost(livrePost: LivrePost):Observable<LivrePost>{
        return from(this.LivrePostRepository.save(livrePost));
    }

    findAllPosts():Observable<LivrePost[]>{
        return from(this.LivrePostRepository.find())
    }

    updatePost(idLivre: number,livrePost:LivrePost):Observable<UpdateResult>{
        return from(this.LivrePostRepository.update(idLivre,livrePost));
    }
    deletePost(idLivre: number){
        return from(this.LivrePostRepository.delete(idLivre));
    }
    // async findLivre(idLivreOrTitreLivre: string): Promise<LivrePostEntity> {
    //     return this.LivrePostRepository.findOne({
    //       where: [{ idLivre: idLivreOrTitreLivre }, { titreLivre: idLivreOrTitreLivre }],
    //     });
    //   }
    async search(query: string): Promise<LivrePostEntity[]> {
        const val = parseInt(query, 10)
        if(isNaN(val)){
             const livres = await this.LivrePostRepository
            .createQueryBuilder('livre')
            .where('livre.titreLivre ILIKE :query', { query: String(`%${query}%`)})
            .getMany();

            return livres;
        }else{
            const livres = await this.LivrePostRepository
            .createQueryBuilder('livre')
            .orWhere('livre.idLivre = :idLivre', { idLivre: Number(query) })
            .getMany();

            return livres;
        }
        
      }
}
