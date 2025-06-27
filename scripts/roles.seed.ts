import { Field, getPayload } from "payload";
import config from "../payload.config";

export async function seedRoles() {
  try {
    console.log("🔑 Iniciando seed de roles...");

    const payload = await getPayload({ config });

    const existing = await payload.find({
      collection: "roles",
      where: { role: { equals: "admin" } },
    });

    if (existing.docs.length === 0) {
      // Buscar collection config de 'roles'
      const roleCollection = payload.config.collections.find(
        (c) => c.slug === "roles"
      );

      if (!roleCollection) {
        throw new Error("Collection 'roles' não encontrada no config.");
      }

      // Buscar campo 'permissions' com segurança de tipo
      const permissionsField = roleCollection.fields.find(
        (field): field is Field & { name: string; options: any[] } =>
          "name" in field &&
          field.name === "permissions" &&
          "options" in field &&
          Array.isArray((field as any).options)
      );

      if (!permissionsField) {
        throw new Error(
          "Campo 'permissions' não encontrado ou mal definido na collection 'roles'."
        );
      }

      const allPermissions = permissionsField.options.map((opt: any) =>
        typeof opt === "string" ? opt : opt.value
      );

      await payload.create({
        collection: "roles",
        data: {
          role: "admin",
          permissions: allPermissions,
        },
      });

      console.log("✅ Role 'admin' criada com permissões:", allPermissions);
    } else {
      console.log("ℹ️ Role 'admin' já existe");
    }

    console.log("🎉 Seed de roles concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro durante o seed de roles:", error);
    console.error("Stack trace:", (error as Error).stack);
    throw error;
  }
}

// Execução direta quando chamado como script
if (require.main === module) {
  console.log("Executando seed de roles...");
  seedRoles()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
