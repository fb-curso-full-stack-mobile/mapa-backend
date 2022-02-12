-- CreateTable
CREATE TABLE "PolygonCoordinate" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "polygonId" INTEGER NOT NULL,

    CONSTRAINT "PolygonCoordinate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Polygon" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Polygon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PolygonCoordinate" ADD CONSTRAINT "PolygonCoordinate_polygonId_fkey" FOREIGN KEY ("polygonId") REFERENCES "Polygon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
