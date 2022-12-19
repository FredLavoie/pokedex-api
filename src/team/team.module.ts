import { Module } from '@nestjs/common';
import { TeamResolvers } from './team.resolvers';
import { TeamService } from './team.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TeamResolvers, TeamService, PrismaService],
})
export class TeamModule {}
