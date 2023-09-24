
import ProtectedNoAuth from "@/context/ProtectNoAuth"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ProtectedNoAuth>
      {children}
    </ProtectedNoAuth>

  )
}
