import { Controller, Get, Param, Query } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Pokemon as PokemonModel } from '@prisma/client';

@Controller('api')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('pokemon')
  async getAllPokemon(
    @Query('page') pageNumber?: string,
  ): Promise<PokemonModel[]> {
    const skip = pageNumber ? (Number(pageNumber) - 1) * 50 : 0;
    return this.prismaService.pokemon.findMany({
      take: 50,
      skip: skip,
    });
  }

  @Get('pokemon/:id')
  getPokemonDetails(@Param('id') pokemonId: string): Promise<PokemonModel> {
    return this.prismaService.pokemon.findUnique({
      where: { id: Number(pokemonId) },
    });
  }
}
