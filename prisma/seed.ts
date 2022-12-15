import { PrismaClient } from '@prisma/client';
import { seedData } from '../data';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: seedData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
