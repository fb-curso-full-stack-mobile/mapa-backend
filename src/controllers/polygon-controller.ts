import { Polygon, PolygonCoordinate, PrismaClient } from "@prisma/client";

class PolygonController {
  async insert(polygon: Polygon, coordinates: PolygonCoordinate[]) {
    const prisma = new PrismaClient();
    console.log("polygon: ", polygon);
    console.log("coordinates: ", coordinates);
    try {
      await prisma.polygon.deleteMany({});
      const po = await prisma.polygon.create({
        data: {},
      });

      for (const coordinate of coordinates) {
        await prisma.polygonCoordinate.create({
          data: {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            polygon: { connect: { id: po.id } },
          },
        });
      }
    } catch (e) {
      console.log("Polygon insert exception: ", e);
      throw e;
    } finally {
      prisma.$disconnect();
    }
  }

  async fetch() {
    const prisma = new PrismaClient();
    try {
      const polygons = await prisma.polygon.findMany({});
      const polygonsArray = [];
      for (const polygon of polygons) {
        const coordinates = await prisma.polygonCoordinate.findMany({
          where: {
            polygonId: polygon.id,
          },
        });
        polygonsArray.push({
          id: polygon.id,
          coordinates: coordinates,
        });
      }
      return polygonsArray;
    } catch (e) {
      console.log("Polygon fetch exception: ", e);
      throw e;
    } finally {
      prisma.$disconnect();
    }
  }
}

export default new PolygonController();
