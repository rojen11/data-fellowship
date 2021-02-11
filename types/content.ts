
interface ContentType {
  slug: string
  title: string
  image: string
  order: number
  template: string
  steps?: {
    title: string
    detail: string
  }[]
  content: string
}
export interface ComponentProps {
  data: ContentType
}
export default ContentType
