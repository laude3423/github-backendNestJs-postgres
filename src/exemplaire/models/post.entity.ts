import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('exemplaire')
export class ExemplairePostEntity{
    @PrimaryGeneratedColumn()
    idExemplaire: number;

    @Column()
    idLivre: string;

    @Column()
    DateAchat: Date;

}