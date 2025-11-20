
import { PartialType } from '@nestjs/mapped-types';

export class CreateUsuarioDto {
    name: string;
    lastname: string;
    mail: string;
    role: string;
}
