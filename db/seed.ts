import { getCollection } from 'astro:content';
import { Clients, Posts, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{ id: 1, name: "Kasim", age: 25, isActive: true },
		{ id: 2, name: "Fernando", age: 35, isActive: false  },
		{ id: 3, name: "Anthony", age: 45, isActive: false  },
		{ id: 4, name: "Jorge", age: 55, isActive: true  },
		{ id: 5, name: "Mina", age: 65, isActive: true  },
	  ]);

	const posts = await getCollection("blog");

	await db.insert(Posts).values(
		posts.map(p => ({
			id: p.id,
			title: p.data.title,
			likes: Math.round(Math.random() * 100)
		}))
	);

}
