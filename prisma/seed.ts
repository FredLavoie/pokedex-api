import { PrismaClient } from '@prisma/client';
import { seedData } from '../data';

const prisma = new PrismaClient();

async function loadSeedData() {
  await prisma.pokemon.deleteMany();
  console.log('Deleted all pokemon data');

  for (const row of seedData) {
    // before creating the image URL, sanitize the name to remove
    // all spaces, special characters, colons and periods
    const sanitizedName = row.name.english
      .replace('.', '')
      .replace(' ', '-')
      .replace(':', '')
      .replace('♀', '-f')
      .replace('♂', '-m')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    // add the image url to the pokemon data
    row.image = `http://img.pokemondb.net/artwork/${sanitizedName}.jpg`;
    // create the table row
    await prisma.pokemon.create({
      data: row,
    });
  }
  console.log('Seeding database complete');
}

loadSeedData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
