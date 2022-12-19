import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Pokemon } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  // Get a single pokemon
  async getPokemon(id: string): Promise<Pokemon | null> {
    return this.prisma.pokemon.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple pokemons
  async getAllPokemons(): Promise<Pokemon[]> {
    return this.prisma.pokemon.findMany({});
  }
}
