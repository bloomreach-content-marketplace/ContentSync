import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import ExportImportModule from '@/modules/ExportImport';

export const metadata = {
  title: 'Content Export/Import'
}

export default function Configuration() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Export & Import'
          subHeading='Batch Export & Import Operation'
        />
      </PageTitleWrapper>
      <ExportImportModule />
    </>
  )
}
