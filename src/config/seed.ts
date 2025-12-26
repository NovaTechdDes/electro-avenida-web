import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { Prisma, PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "Cables",
    description: "Cables, conductos, canaletas y accesorios",
    img: "GiWireCoil",
  },
  {
    name: "Iluminacion",
    description:
      "Iluminacion LED, Proyectores, Luminarias de Calle, Iluminacion para interiores",
    img: "MdLightbulbOutline",
  },
];

export async function main() {
  for (const u of categoryData) {
    await prisma.category.create({ data: u });
  }
}

main();
