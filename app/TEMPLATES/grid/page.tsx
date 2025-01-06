import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

// Modules
import { GridTemplateModule } from '@/modules/Templates/grid';

export const metadata = {
  title: 'Grid Page'
}

export default async function TemplatesGrid() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Grid Page'
        />
      </PageTitleWrapper>
      <GridTemplateModule />
    </>
  )
}
