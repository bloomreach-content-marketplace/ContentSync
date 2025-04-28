
// Components
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

// Modules
import { ChannelListModule } from 'src/modules';
import MarkdownContent from '@/modules/MarkdownContent'

export const metadata = {
  title: 'Channels'
}

export default function Page() {

  const notes = {
    contentHtml : '<h2>Note: Channels tab works with the selected source project only.</h2>'
  }

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Channels'
        />
      </PageTitleWrapper>
      <MarkdownContent markdown={notes} />
      <ChannelListModule />
    </>
  )
}
