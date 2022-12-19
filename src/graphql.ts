
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewTeam {
    name: string;
    pokemonIds?: Nullable<string[]>;
}

export class UpdateTeam {
    id: string;
    name: string;
    pokemonIds?: Nullable<string[]>;
}

export class Pokemon {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: PokemonName;
    type: Nullable<string>[];
    base: PokemonBase;
    image?: Nullable<string>;
}

export class PokemonBase {
    HP?: Nullable<number>;
    Attack?: Nullable<number>;
    Defense?: Nullable<number>;
    SpAttack?: Nullable<number>;
    SpDefense?: Nullable<number>;
    Speed?: Nullable<number>;
}

export class PokemonName {
    english?: Nullable<string>;
    japanese?: Nullable<string>;
    chinese?: Nullable<string>;
    french?: Nullable<string>;
}

export abstract class IQuery {
    abstract pokemons(): Pokemon[] | Promise<Pokemon[]>;

    abstract pokemon(id: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;

    abstract teams(): Team[] | Promise<Team[]>;

    abstract team(id: string): Nullable<Team> | Promise<Nullable<Team>>;
}

export class Team {
    id: string;
    name: string;
    pokemonIds?: Nullable<string[]>;
    createdAt: string;
    updatedAt: string;
}

export abstract class IMutation {
    abstract createTeam(input?: Nullable<NewTeam>): Team | Promise<Team>;

    abstract updateTeam(input?: Nullable<UpdateTeam>): Nullable<Team> | Promise<Nullable<Team>>;

    abstract deleteTeam(id: string): Nullable<Team> | Promise<Nullable<Team>>;
}

type Nullable<T> = T | null;
