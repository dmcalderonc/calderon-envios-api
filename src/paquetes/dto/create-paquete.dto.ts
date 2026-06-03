import { IsString, IsNumber, IsNotEmpty, IsPositive, IsEnum,} from 'class-validator';

export enum TipoPaquete {
  NORMAL = 'NORMAL',
  FRAGIL = 'FRÁGIL',
  REFRIGERADO = 'REFRIGERADO'
}

export class CreatePlanDto {
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
    tipo?: TipoPaquete;
  
    @IsString()
    @IsNotEmpty()
    rutaId?: string;
}