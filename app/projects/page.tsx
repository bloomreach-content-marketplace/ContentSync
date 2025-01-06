
import PageTitle from '@/components/PageTitle'
import PageTitleWrapper from '@/components/PageTitleWrapper'
import { ProjectsListModule } from './ProjectsListModule'

export const metadata = {
  title: 'Projects'
}

export default function Page() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading='Projects'
        />
      </PageTitleWrapper>
      <ProjectsListModule />
    </>
  )
}
