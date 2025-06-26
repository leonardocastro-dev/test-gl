import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'
import Media from './src/collections/Media'

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media],
  secret: 'j6+vPqGDMUdBbgkXjTmlRvVRgKB+SPNBCdQpWov6l1I=',
  db: sqliteAdapter({
    client: {url: 'file:./index.db'},
  }),
  sharp,
})
