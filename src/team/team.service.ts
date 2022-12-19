import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Team } from '@prisma/client';
import { NewTeam, UpdateTeam } from 'src/graphql';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  // Get a single team
  async getTeam(id: string): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple teams
  async getAllTeams(): Promise<Team[]> {
    return this.prisma.team.findMany({});
  }

  // Create a team
  async createTeam(input: NewTeam): Promise<Team> {
    if (input.pokemonIds.length > 5) {
      throw new HttpException(
        'Team size must be 5 or less',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.prisma.pokemon
      .findMany({
        where: {
          id: { in: input.pokemonIds.map((ea) => parseInt(ea)) },
        },
      })
      .then((data) => {
        if (data.length !== input.pokemonIds.length) {
          throw new HttpException(
            "One or more pokemon doesn't exit",
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    return this.prisma.team.create({
      data: input,
    });
  }

  // Update a team
  async updateTeam(params: UpdateTeam): Promise<Team> {
    if (params.pokemonIds.length > 5) {
      throw new HttpException(
        'Team size must be 5 or less',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.prisma.pokemon
      .findMany({
        where: {
          id: { in: params.pokemonIds.map((ea) => parseInt(ea)) },
        },
      })
      .then((data) => {
        if (data.length !== params.pokemonIds.length) {
          throw new HttpException(
            "One or more pokemon doesn't exit",
            HttpStatus.BAD_REQUEST,
          );
        }
      });

    return this.prisma.team.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name: params.name,
        pokemonIds: params.pokemonIds,
      },
    });
  }

  // Delete a team
  async deleteTeam(id: string): Promise<Team> {
    return this.prisma.team.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
