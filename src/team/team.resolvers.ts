import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { NewTeam, UpdateTeam } from 'src/graphql';

@Resolver('Team')
export class TeamResolvers {
  constructor(private readonly teamService: TeamService) {}

  @Query('teams')
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Query('team')
  async getTeam(@Args('id') args: string) {
    return this.teamService.getTeam(args);
  }

  @Mutation('createTeam')
  async createTeam(@Args('input') args: NewTeam) {
    return this.teamService.createTeam(args);
  }

  @Mutation('updateTeam')
  async updateTeam(@Args('input') args: UpdateTeam) {
    return this.teamService.updateTeam(args);
  }

  @Mutation('deleteTeam')
  async deleteTeam(@Args('id') args: string) {
    return this.teamService.deleteTeam(args);
  }
}
