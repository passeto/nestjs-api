import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateBrandDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;
}
