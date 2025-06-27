import { getPayload } from "payload";
import config from "../payload.config";

export async function seedPermissionsCollections() {
  try {
    const noCollections = [
      "payload-migrations",
      "payload-preferences",
      "payload-locked-documents",
    ];

    const payload = await getPayload({ config });

    const collections = payload.config.collections.filter(
      (collection) => !noCollections.includes(collection.slug)
    );

    const actions = ["create", "read", "update", "delete"];

    for (const collection of collections) {
      for (const action of actions) {
        await payload.create({
          collection: "permissions",
          data: {
            permission: `${collection.slug}:${action}`,
            role: "admin",
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

if (require.main === module) {
  seedPermissionsCollections()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
