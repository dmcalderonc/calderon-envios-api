import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rutas } from '../rutas/ruta.entity';

@Entity('planes')
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  tipo?: string;

  @Column('decimal', { precision: 8, scale: 2 })
  costo?: number;

  @Column('decimal', { precision: 8, scale: 2 })
  peso?: number;


  @Column('decimal', { precision: 8, scale: 2 })
  recargo?: number;
}