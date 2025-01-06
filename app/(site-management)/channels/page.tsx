
// Components
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

// Modules
import { ChannelListModule } from '@/modules';

export const metadata = {
  title: 'Channels'
}

export default function Page() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Channels'
        />
      </PageTitleWrapper>
      <ChannelListModule />
    </>
  )
}
