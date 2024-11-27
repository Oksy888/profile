type Props = {
  params: Promise<{ id: string }>
}
export default async function ChartPage(props: Props) {
  const params = await props.params
  return (
    <div>
      <h1>Chart {params.id}</h1>
    </div>
  )
}
