import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import { TranslationsModule } from '@/modules';

export const metadata = {
  title: 'Translations'
}

export default function Page() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Translations'
        />
      </PageTitleWrapper>
      <TranslationsModule />
    </>
  )
}
