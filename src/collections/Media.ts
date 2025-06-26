import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'filename',
  },
  fields: [],
};

export default Media;