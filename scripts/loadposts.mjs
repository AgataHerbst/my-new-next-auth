import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient({ log: ['query'] });


async function main() {
  const
    posts = (await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()).results;
  for (const post of posts) {
    delete post.id;
    delete post.title;
    delete post.body;
  }
  const res = await prisma.post.createMany({
    data: posts,
    skipDuplicates: true
  });
  console.info(res);

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });