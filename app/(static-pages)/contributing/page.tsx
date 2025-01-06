import { getMarkdown } from '@/lib/markdown';

import MarkdownContent from '@/modules/MarkdownContent';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

export const metadata = {
  title: 'Contributing'
}

async function getMarkdownContent() {
  const markdown = await getMarkdown('CONTRIBUTING.md');
  return markdown;
}

export default async function ReleaseNotes() {
  const markdown = await getMarkdownContent();

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Contributing'
        />
      </PageTitleWrapper>
      <MarkdownContent markdown={markdown} />
    </>
  )
}
