import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import ConvertPageLayoutComponent from '@/modules/Pages/ConvertPageLayout';

export const metadata = {
  title: 'Convert Page Layout'
}

export default function Page() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Convert Page Layout'
        />
      </PageTitleWrapper>
      <ConvertPageLayoutComponent />
    </>
  )
}
