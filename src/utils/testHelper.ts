export async function resolvedComponent(Component: React.FC, props: object) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}