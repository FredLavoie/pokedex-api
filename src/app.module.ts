import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    PokemonModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
