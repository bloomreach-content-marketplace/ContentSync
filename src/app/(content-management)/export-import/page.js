import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ExportImportModule from 'src/modules/ExportImport';
import MarkdownContent from '@/modules/MarkdownContent'

export const metadata = {
  title: 'Content Export/Import'
}

export default function Configuration() {

  const notes = {
    contentHtml : '<h2>Notes:</h2>' +
      '<ul style="margin-bottom: 10px">' +
      '<li>The configured source environment will be used for the export.</li>' +
      '<li>The configured target environment will be used for the import.</li>' +
      '<li>If you want to perform the export and import operations on the <u>same environment</u> please set the source environment <u>only</u> in the configuration.</li>' +
      '<li>The import operation can <u>only</u> be performed on projects and not directly to core.</li>' +
      '</ul>'
  }

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Export & Import'
          subHeading='Batch Export & Import Operation'
        />
      </PageTitleWrapper>
      <MarkdownContent markdown={notes} />
      <ExportImportModule />
    </>
  )
}
