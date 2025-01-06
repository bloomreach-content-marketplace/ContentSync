import { Suspense } from 'react';

import ConfigurationModule from '@/modules/Configuration';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

export const metadata = {
  title: 'Configuration'
}

export default function Page() {
  return (
    <Suspense>
      <PageTitleWrapper>
        <PageTitle
          heading='Configuration'
          subHeading='Configuration used throughout the application'
        />
      </PageTitleWrapper>
      <ConfigurationModule />
    </Suspense>
  )
}
