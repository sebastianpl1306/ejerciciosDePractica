# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```

## Nota: Usuario por defecto
usuario: test1@google.com
password: 123456789


# Prod


# Stage