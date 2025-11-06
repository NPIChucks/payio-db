# PayIO DataStore

**Description**  
This is the database migration for the PayIO

**Setup**

1. Create a database named `payio_dev` using you database client of choice.

2. Run the migrations

```bash
$ yarn db:migrate
```

3. Run seeders

```bash
$ yarn db:seed
```

4. Run a specific seeder (optional)

```bash
$ npx sequelize-cli db:seed --seed 20240407073753-seed-users
```
