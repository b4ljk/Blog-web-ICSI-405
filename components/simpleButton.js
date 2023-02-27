export default function SimpleButton({ onClick, children, ...rest }) {
  return (
    <button className={'btn ' + rest.className} onClick={onClick}>
      {children}
    </button>
  )
}
