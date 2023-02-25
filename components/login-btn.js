import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function LoginButton() {
  const { data: session } = useSession()
  // check if url is profile!
  const router = useRouter()
  const isProfile = router.pathname === '/profile'
  if (session) {
    console.log('session', session)
    return (
      <div className="flex gap-2">
        <img
          src={session.user.image}
          className={
            isProfile
              ? 'h-9 w-9 cursor-pointer rounded-full border-2 border-cyan-500'
              : 'h-8 w-8 cursor-pointer rounded-full'
          }
          onClick={() => {
            router.push('/profile')
          }}
          alt="profile picture"
        />
        <button className="font-bold text-cyan-500" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    )
  }
  return (
    <>
      <button className="font-bold text-cyan-500" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  )
}
