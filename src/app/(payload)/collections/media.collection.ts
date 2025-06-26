import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
    update: () => true
  },
  admin: {
    useAsTitle: 'filename',
    description: 'Gerencie seus arquivos de mídia',
  },
  fields: [],
};

export default Media;
