export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <div>There are 3 rooms.</div>
    </div>
  )
}
