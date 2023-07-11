import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {

  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({
      data: createBrandDto,
    });
  }

  findAll() {
    return this.prisma.brand.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    })
  }

  findOne(id: number) {
    return this.prisma.brand.findUniqueOrThrow({
      where: {
        id,
      }
    })
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: {
        id,
      },
      data: updateBrandDto
    })
  }

  remove(id: number) {
    return this.prisma.brand.delete({
      where: {
        id,
      }
    })
  }
}
