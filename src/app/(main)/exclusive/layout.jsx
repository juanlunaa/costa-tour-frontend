const LayoutExclusive = ({ children, banner }) => (
  <div>
    <div className="banner">{banner}</div>
    <div>{children}</div>
  </div>
)

export default LayoutExclusive
