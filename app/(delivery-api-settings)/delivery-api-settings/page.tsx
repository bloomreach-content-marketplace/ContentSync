
import PageTitle from '@/components/PageTitle'
import PageTitleWrapper from '@/components/PageTitleWrapper'

import { DeliveryApiSettingsModule } from '@/modules'

export const metadata = {
  title: 'Delivery API Settings'
}

export default function DeliveryApiSettings() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Delivery API Settings'
        />
      </PageTitleWrapper>
      <DeliveryApiSettingsModule />
    </>
  )
}
