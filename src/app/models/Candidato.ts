import { Cargo } from './Cargo';
import { Provincia } from './Provincia';

export class Candidato {
  id: string
  nombre: string
  fechaNacimiento: Date
  cargoPostulacion: Cargo
  cargoActual: Cargo
  imagenPerfil: any
  provincia: Provincia
}