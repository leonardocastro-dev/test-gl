import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'
import * as collections from './src/app/(payload)/collections'

export default buildConfig({
  editor: lexicalEditor(),
  collections: Object.values(collections),
  secret: 'j6+vPqGDMUdBbgkXjTmlRvVRgKB+SPNBCdQpWov6l1I=',
  db: sqliteAdapter({
    client: {url: 'file:./index.db'},
  }),
  sharp,
})
