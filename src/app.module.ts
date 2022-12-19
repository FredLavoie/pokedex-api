import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from './pokemon/pokemon.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    PokemonModule,
    TeamModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
