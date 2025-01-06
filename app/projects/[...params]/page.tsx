import { ProjectsDetailsModule } from './ProjectsDetailsModule'

export const metadata = {
  title: 'Project Details'
}

export default async function Page(props) {
  const params = await props.params;
  const [instance, projectId] = params.params

  return (
    <>
      <ProjectsDetailsModule instance={instance} projectId={projectId} />
    </>
  )
}
