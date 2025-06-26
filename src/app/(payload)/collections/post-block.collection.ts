import { CollectionConfig } from 'payload'

const PostBlock: CollectionConfig = {
  slug: 'post-blocks',
  admin: {
    useAsTitle: 'title',
    description: 'Gerencie os itens do jornal com imagem, tipo e tamanho',
  },
  access: {
    read: () => true,
    update: () => true
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: 'Tipo de Conteúdo',
      options: [
        {
          label: 'Press Release',
          value: 'press_release',
        },
        {
          label: 'Atualização',
          value: 'update',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descrição',
    },
  ],
}

export default PostBlock
