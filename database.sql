CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "author" ("id" SERIAL PRIMARY KEY, 
	"name" VARCHAR (80) NOT NULL,
	"date_added" DATE DEFAULT CURRENT_DATE
	);

CREATE TABLE "category" ("id" SERIAL PRIMARY KEY,
	"type" VARCHAR NOT NULL
	);
	
CREATE TABLE "books" ("id" SERIAL PRIMARY KEY,
	"ISBN" VARCHAR (80) NOT NULL,
	"person_id" INT REFERENCES "person",
	"category_id" INT REFERENCES "category",
	"title" VARCHAR (200) NOT NULL,
	"author_id" INT REFERENCES "author"
	);


SELECT "books"."id" AS "ID", "books"."title" AS "Book Title", "author"."name"  
     AS "Author Name", "category"."type" AS "Category"
FROM "books" JOIN "author" ON "books"."author_id" = "author"."id"
    JOIN "category" ON "category"."id" = "books"."category_id"
WHERE "person_id" = $1;


SELECT "region"."name" AS "Region", count ("country"."name")
FROM "country" JOIN "region" ON "country"."region_id"="region"."id"
GROUP BY "region"."name";