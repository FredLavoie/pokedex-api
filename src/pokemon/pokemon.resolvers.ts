import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';

@Resolver('Pokemon')
export class PokemonResolvers {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query('pokemons')
  async pokemons() {
    return this.pokemonService.getAllPokemons();
  }

  @Query('pokemon')
  async pokemon(@Args('id') args: string) {
    return this.pokemonService.getPokemon(args);
  }
}
