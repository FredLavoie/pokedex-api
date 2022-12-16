import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Pokemon as PokemonModel } from '@prisma/client';

@Controller('api')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('pokemon')
  async getAllPokemon(): Promise<PokemonModel[]> {
    return this.prismaService.pokemon.findMany();
  }

  @Get('pokemon/:id')
  getPokemonDetails(@Param('id') pokemonId: string): Promise<PokemonModel> {
    return this.prismaService.pokemon.findUnique({
      where: { id: Number(pokemonId) },
    });
  }
}
