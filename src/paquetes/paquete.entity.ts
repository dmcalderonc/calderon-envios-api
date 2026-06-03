import { IsString, IsNumber, IsNotEmpty, IsPositive, IsEnum } from 'class-validator';
import { TipoPaquete } from './paquete.entity'; // Puedes importar el enum desde tu entidad

export class CreatePaqueteDto {
  @IsString()
  @IsNotEmpty()
  codigo?: string; 

  @IsString()
  @IsNotEmpty()
  destinatario?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  peso_kg?: number;

  @IsEnum(TipoPaquete)
  tipo: TipoPaquete;

  @IsString()
  @IsNotEmpty()
  rutaId?: string; 
}