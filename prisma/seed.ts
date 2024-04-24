import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "664b29f8-4a21-4f98-a1e4-7c9314c7ad08",
      title: "Unite Sumit",
      slug: "unite-sumit",
      details: "Um evento para devs apaixonados por tecnologia!",
      maximumAttendees: 130,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
