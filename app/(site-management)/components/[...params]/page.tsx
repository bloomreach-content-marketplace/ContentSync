import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import ComponentsPage from '@/modules/ComponentsPage';
import ComponentsPageErrorContent from '@/modules/ComponentsPage/ComponentsPageErrorContent';

export const metadata = {
  title: 'Component Details'
}

export default async function Page(props) {
  const params = await props.params;
  const { params: urlParams } = params
  const [channelId, componentGroup, componentName] = urlParams

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Component Details'
        />
      </PageTitleWrapper>

      {urlParams.length < 3 ? (
        <ComponentsPageErrorContent />
      ) : (
        <ComponentsPage channelId={channelId} componentGroup={componentGroup} componentName={componentName} />
      )}
    </>
  )
}
