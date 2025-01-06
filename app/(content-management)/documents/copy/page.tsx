import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PagesCopyModule from '@/modules/Pages/copy';

export const metadata = {
  title: 'Copy Documents'
}

export default function Page() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle heading='Copy Documents'/>
      </PageTitleWrapper>
      <PagesCopyModule />
    </>
  )
}
