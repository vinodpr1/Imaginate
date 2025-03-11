// no need of singleton because it's in seperate file
import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();
