import { ValidatePermission } from "@/utils/validate";
import type { CollectionConfig } from "payload";


const Roles: CollectionConfig = {
  slug: "roles",
  access: {
    // create: ValidatePermission("create"),
    // read: ValidatePermission("read"),
    // update: ValidatePermission("update"),
    // delete: ValidatePermission("delete"),
  },
  fields: [
    {
      name: "role",
      label: "Cargo",
      type: "text",
    },
    {
      name: "permissions",
      type: "select",
      label: "Permissões",
      hasMany: true,
      options: [
        { label: "Criar", value: "create" },
        { label: "Ler", value: "read" },
        { label: "Atualizar", value: "update" },
        { label: "Deletar", value: "delete" },
      ],
    },
    {
      type: "array",
      name: "User Permissions",
      fields: [
        {
          name: "categorias",
          label: "Categorias",
          type: "select",
          hasMany: true,
          options: [
            { label: "Tecnologia", value: "tecnologia" },
            { label: "Educação", value: "educacao" },
            { label: "Saúde", value: "saude" },
            { label: "Esportes", value: "esportes" },
          ],
        },
      ],
    },
    {
      type: "array",
      name: "Roles Permissions",
      fields: [
        {
          name: "categorias",
          label: "Categorias",
          type: "select",
          hasMany: true,
          options: [
            { label: "Tecnologia", value: "tecnologia" },
            { label: "Educação", value: "educacao" },
            { label: "Saúde", value: "saude" },
            { label: "Esportes", value: "esportes" },
          ],
        },
      ],
    },
  ],
};

export default Roles;