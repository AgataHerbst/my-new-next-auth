import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient;

export default async function handler(req, res) {
  const { slug } = req.query,
    [list, id] = slug;

  console.debug('>> ', req.method, ' запрос на', req.url, 'slug =', { list, id });

  if (!['post'].includes(slug[0])) {
    return res.status(404).send({ error: 'wrong list' });
  }
  try {
    switch (req.method) {
      case 'GET':
        return res.status(200).json(await prisma[list].findMany());

    }
  } catch (error) {
    console.log(__filename, error);
    res.status(500).send({ error });
  }





}