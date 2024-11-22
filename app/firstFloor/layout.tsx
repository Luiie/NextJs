export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <div>There are 7 furnitures.</div>
    </div>
  )
}
