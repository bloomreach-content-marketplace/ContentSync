import { getMarkdown } from '@/lib/markdown';

import MarkdownContent from '@/modules/MarkdownContent';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

export const metadata = {
  title: 'Release Notes'
}

async function getMarkdownContent() {
  const markdown = await getMarkdown('CHANGELOG.md');
  return markdown;
}

export default async function ReleaseNotes() {
  const markdown = await getMarkdownContent();

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Release Notes'
        />
      </PageTitleWrapper>
      <MarkdownContent markdown={markdown} />
    </>
  )
}
