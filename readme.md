# Prisma

Sarawut wongmanee

## Required
- git
- Docker & Docker compose
- ProgresSql 
- Node.js
- Prisma
- VScode
    - ProgresSQL extension(Chris Kolkman)
 

## Running
### database
``` 
docker-compose up -d
```
### Schema
```
npx prisma generate
npx prisma studio
npx prisma init --datasource-provider postgresql
```
## Develop
### First time 
npx prisma generate
npx prisma studio
npx prisma init --datasource-provider postgresql

### Update Schema
1. Update some schema
2. Run this command `npx prisma generate`
    2.1 `npx prisma studio` working
    2.2 connect db not change
3. Run this command `npx prisma db push`
    3.1 `npx prisma studio` ชื่อตารางเปลี่ยน ไม่ขึ้น error 
    3.2 connect db name table is last change 

### Normal
``` bash
npx prisma generate
```


