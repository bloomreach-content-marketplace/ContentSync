import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import { ChannelDetailsModule } from '@/modules';

export const metadata = {
  title: 'Channel Details'
}

export default async function Page(props) {
  const params = await props.params;
  const { channelId } = params

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Channel Details'
        />
      </PageTitleWrapper>
      <ChannelDetailsModule channelId={channelId} />
    </>
  )
}
