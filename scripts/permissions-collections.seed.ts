import { Payload } from "payload";

export default async function SeedPermissionsCollections(payload: Payload) {
  const collections = payload.config.collections;

  for (const collection of collections) {
    const collectionSlug = collection.slug;

    console.log(`🔧 Criando permissões para: ${collectionSlug}`);

    await payload.create({
      collection: "permissions",
      data: {
        collection: collectionSlug,
        canCreate: true,
        canRead: true,
        canUpdate: true,
        canDelete: true,
        role: "admin", // ou ID da role se preferir
      },
    });
  }

  console.log("✅ Permissões criadas com sucesso");
}
