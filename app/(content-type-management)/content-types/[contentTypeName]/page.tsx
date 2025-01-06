import ContentTypeDetailModule from '@/modules/ContentTypes/ContentTypeDetail'

export const metadata = {
  title: 'Content Type Details'
}

export default async function Page(props) {
  const params = await props.params;
  const { contentTypeName } = params

  return (
    <>
      <ContentTypeDetailModule contentTypeName={contentTypeName} />
    </>
  )
}
