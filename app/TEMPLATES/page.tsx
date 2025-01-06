// Components
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

// Modules
import { TemplatePageModule } from '@/modules/Templates';

export const metadata = {
  title: 'Templates'
}

export default async function Templates() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Templates'
        />
      </PageTitleWrapper>
      <TemplatePageModule />
    </>
  )
}
