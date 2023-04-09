import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('livre')
export class LivrePostEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    idLivre: number;

    @ApiProperty()
    @Column()
    titreLivre: string;

    @ApiProperty()
    @Column()
    auteurLivre: string;

    @ApiProperty()
    @Column()
    editeurLivre: string;

    @ApiProperty()
    @Column({type: 'timestamp', default:() =>'CURRENT_TIMESTAMP'})
    dateAparution: Date;
}