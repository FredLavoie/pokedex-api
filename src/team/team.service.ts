import { Injectable } from '@nestjs/common';
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
    return this.prisma.team.create({
      data: input,
    });
  }

  // Update a team
  async updateTeam(params: UpdateTeam): Promise<Team> {
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
