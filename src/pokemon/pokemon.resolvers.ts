import { Resolver, Query, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';

@Resolver('Post')
export class PokemonResolvers {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query('pokemons')
  async pokemons() {
    return this.pokemonService.pokemons();
  }

  @Query('pokemon')
  async pokemon(@Args('id') args: string) {
    return this.pokemonService.pokemon(args);
  }
}
