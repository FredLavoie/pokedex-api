import { Resolver, Query, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';

@Resolver('Post')
export class PokemonResolvers {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query('pokemons')
  async pokemons(@Args('page') page?: string) {
    console.log('*** page in resolvers: ', page);
    return this.pokemonService.pokemons(page);
  }

  @Query('pokemon')
  async pokemon(@Args('id') args: string) {
    return this.pokemonService.pokemon(args);
  }
}
