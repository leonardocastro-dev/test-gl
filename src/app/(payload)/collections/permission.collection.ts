import { type CollectionConfig } from "payload";
const Permissions: CollectionConfig = {
  slug: "permissions",
  fields: [
    {
      name: "permission",
      label: "Nome da Permissao",
      type: "text",
    },
  ],
};

export default Permissions;
