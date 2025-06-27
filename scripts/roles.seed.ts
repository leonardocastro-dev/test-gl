import { Payload } from "payload";

export default async function SeedRoles(payload: Payload) {
  const existing = await payload.find({
    collection: "roles",
    where: { name: { equals: "admin" } },
  });

  if (existing.docs.length === 0) {
    await payload.create({
      collection: "roles",
      data: {
        name: "admin",
        permissions: ["*"], // ou você pode definir mais detalhadamente
      },
    });

    console.log("✅ Role 'admin' criada");
  } else {
    console.log("ℹ️ Role 'admin' já existe");
  }
}
