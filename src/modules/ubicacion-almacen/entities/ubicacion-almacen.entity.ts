// src/modules/ubicacion-almacen/entities/ubicacion-almacen.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InstrumentoQuirurgico } from '../../instrumento-quirurgico/entities/instrumento-quirurgico.entity'; // <-- ¡VERIFICA ESTA RUTA Y NOMBRE DE ARCHIVO!

@Entity('ubicaciones_almacen')
export class UbicacionAlmacen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  nombre: string;
  @Column('text', { nullable: true })
  descripcion: string;

  @OneToMany(
    () => InstrumentoQuirurgico,

    (instrumento: InstrumentoQuirurgico) => instrumento.ubicacion,
  )
  instrumentos: InstrumentoQuirurgico[];
}
