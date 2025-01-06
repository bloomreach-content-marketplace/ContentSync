// Components
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

// Modules
import { DetailTemplateModule } from '@/modules/Templates/detail';

export const metadata = {
  title: 'Detail Page'
}

export default async function DetailTemplate() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Detail Page'
        />
      </PageTitleWrapper>
      <DetailTemplateModule />
    </>
  )
}
