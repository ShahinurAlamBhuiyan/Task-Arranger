'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/nextjs"

const Header = () => {
  const { user } = useUser()
  return (
    <div>
      {user && (
        <h1>{user?.firstName}{`'s`} Space</h1>
      )}

      {/* Breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
export default Header