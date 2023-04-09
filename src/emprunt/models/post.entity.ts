import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('emprunt')
export class EmpruntPostEntity{
    @PrimaryGeneratedColumn()
    idEmprunt: number;

    @Column()
    idExemplaire: string;

    @Column()
    idEmprunteur: string;

    @Column({ type: 'timestamp', default:() =>'CURRENT_TIMESTAMP'})
    DateEmprunt: Date;

    @Column()
    DateRetour: Date;
}