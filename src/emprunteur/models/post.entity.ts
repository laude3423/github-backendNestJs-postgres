import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('emprunteur')
export class EmprunteurPostEntity{
    @PrimaryGeneratedColumn()
    idEmprunteur: number;

    @Column()
    nomEmprunteur: string;

    @Column()
    PrenomEmprunteur: string;

    @Column()
    telEmprunteur: string;

    @Column()
    adresseEmprunteur: string;
}