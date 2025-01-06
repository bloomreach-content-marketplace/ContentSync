import { getMarkdown } from '@/lib/markdown';

import MarkdownContent from '@/modules/MarkdownContent';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

export const metadata = {
  title: 'Getting Started'
}

async function getMarkdownContent() {
  const markdown = await getMarkdown('GETTING-STARTED.md');
  return markdown;
}

export default async function GettingStarted() {
  const markdown = await getMarkdownContent();

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Getting Started'
        />
      </PageTitleWrapper>
      <MarkdownContent markdown={markdown} />
    </>
  )
}
