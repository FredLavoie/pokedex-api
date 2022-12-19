import { Module } from '@nestjs/common';
import { PokemonResolvers } from './pokemon.resolvers';
import { PokemonService } from './pokemon.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PokemonResolvers, PokemonService, PrismaService],
})
export class PokemonModule {}
