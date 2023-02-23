import AuthorLayout from '@/layouts/AuthorLayout'
import { useSession } from 'next-auth/react'

export default function Profile() {
  // get session
  const { data: session } = useSession()
  if (session) {
    const data = {
      title: 'Profile',
      name: session.user.name,
      avatar: session.user.image,
      occupation: 'Software Engineer',
      company: 'Google',
      email: session.user.email,
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://githublcom/username',
    }

    return (
      <AuthorLayout frontMatter={data}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat
        feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu
        pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis
        vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis
        dapibus diam vel metus tempus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget
        egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus
        tempus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit,
        tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut
        sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac,
        facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque
        aliquet. Duis dapibus diam vel metus tempus vulputate. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae
        arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus
        diam vel metus tempus vulputate.
      </AuthorLayout>
    )
  } else {
    return <div>Not logged in</div>
  }
}
