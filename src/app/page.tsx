import LatestNews from '@/components/latest-news'
import OldNews from '@/components/old-news'
import { getPayload } from 'payload'
import config from '@payload-config'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

async function getPostBlocks() {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'post-blocks',
      sort: '-createdAt',
      limit: 20,
    })
    console.log(result)
    return result.docs || []
  } catch (error) {
    console.error('Erro ao buscar post-blocks:', error)
    return []
  }
}

export default async function Home() {
  const PostBlocks = await getPostBlocks()
  
  // Formatar as datas antes de dividir os posts
  const formattedPostBlocks = PostBlocks.map((block: any) => ({
    ...block,
    createdAt: block.createdAt ? formatDate(block.createdAt) : undefined
  }))
  
  const latestPosts = formattedPostBlocks.slice(0, 11)
  const oldPosts = formattedPostBlocks.slice(11, 20)

  return (
    <div className="min-h-screen p-8 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Dashboard de Conteúdo</h1>
        <LatestNews postBlocks={latestPosts as any} />
        <hr className="my-8" />
        <h2 className="text-2xl font-bold mb-8 text-center">Conteúdo Anterior</h2>
        <OldNews postBlocks={oldPosts as any} />
        <br />
      </div>
    </div>
  )
}
