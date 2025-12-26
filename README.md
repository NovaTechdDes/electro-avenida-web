## Instalacion

1. Instalar Zunstand
2. Instalar react-icons
3. Instalar clsx
4. Instalar Prisma: npm install prisma tsx @types/pg --save-dev,
   npm install @prisma/client @prisma/adapter-pg dotenv pg
5. Inicializar prisma npx prisma init --datasource-provider PostgreSQL

## Desarrollo dev

1. Clonar el repositoro
2. Instalar dependecias `npm install`
3. Copiar archivo `.env.template` a `.env` y poner las variables de entorno
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones `npx prisma migrate dev`
6. Ejectura Seed `npm run seed`
7. Correr el proyecto `npm run dev`
