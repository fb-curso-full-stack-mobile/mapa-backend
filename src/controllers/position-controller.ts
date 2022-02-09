import { Position, PrismaClient } from "@prisma/client";

class PositionController {
  async save(position: Position) {
    if (position.id > 0) {
      return await this.update(position);
    } else {
      return await this.insert(position);
    }
  }

  async insert(position: Position) {
    const prisma = new PrismaClient();
    try {
      // await prisma.position.deleteMany({});
      return prisma.position.create({
        data: position,
      });
    } catch (e) {
      console.log("position insert ex: ", e);
      throw e;
    } finally {
      prisma.$disconnect();
    }
  }

  async update(position: Position) {
    const prisma = new PrismaClient();
    try {
      return prisma.position.update({
        data: {
          lat: position.lat,
          lng: position.lng,
          accuracy: position.accuracy,
          heading: position.heading,
        },
        where: {
          id: position.id,
        },
      });
    } catch (e) {
      console.log("position update ex: ", e);
      throw e;
    } finally {
      prisma.$disconnect();
    }
  }

  async fetch() {
    const prisma = new PrismaClient();
    try {
      return prisma.position.findMany();
    } catch (e) {
      console.log("position fetch ex: ", e);
      throw e;
    } finally {
      prisma.$disconnect();
    }
  }
}

export default new PositionController();
