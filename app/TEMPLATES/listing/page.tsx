import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

// Modules
import { ListingTemplateModule } from '@/modules/Templates/listing';

export const metadata = {
  title: 'Listing Page'
}

export default async function TemplatesListing() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Listing Page'
        />
      </PageTitleWrapper>
      <ListingTemplateModule />
    </>
  )
}
