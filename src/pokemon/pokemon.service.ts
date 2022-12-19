import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Pokemon } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  // Get a single pokemon
  async pokemon(id: string): Promise<Pokemon | null> {
    return this.prisma.pokemon.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple pokemons
  async pokemons(page?: string): Promise<Pokemon[]> {
    console.log('*** page: ', page);
    const skip = page ? (Number(page) - 1) * 50 : 0;
    return this.prisma.pokemon.findMany({
      take: 50,
      skip: skip,
    });
  }
}
