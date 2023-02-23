import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex gap-2">
        <img
          src={session.user.image}
          className="h-8 w-8 cursor-pointer rounded-full"
          onClick={() => {}}
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
