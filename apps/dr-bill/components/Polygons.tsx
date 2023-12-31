export const TriangleAndSquare = ({className}) => {
  return (
    <svg className={className} width="519" height="395" viewBox="0 0 519 395" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.03" d="M379.576 394.7L0.281777 15.1627L518.286 -123.636L379.576 394.7Z" fill="currentColor"/>
      <rect opacity="0.03" x="358" y="22.5703" width="125.138" height="125.138" transform="rotate(-30 358 22.5703)"
            fill="currentColor"/>
    </svg>
  )
}

export const Triangle = ({className}) => {
  return (
    <svg className={className} width="406" height="422" viewBox="0 0 406 422" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.03" d="M96.8214 421.91L-16.0839 0.000710053L405.555 112.978L96.8214 421.91Z"
            fill="currentColor"/>
    </svg>

  )
}

export const PolygonAndEllipse = ({className}) => {
  return (
    <svg className={className} width="219" height="219" viewBox="0 0 219 219" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.03"
            d="M89.0984 0.232014L218.716 47.5795L210.246 182.655L75.3929 218.789L0.519622 106.045L89.0984 0.232014Z"
            fill="currentColor"/>
      <circle opacity="0.03" cx="171.5" cy="36.5" r="28.5" fill="currentColor"/>
    </svg>
  )
}

export const Circle = ({className, style}: {className?: string, style?: object}) => {
  return (
    <svg className={className} style={style} width="686" height="686" viewBox="0 0 686 686" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.3" cx="343" cy="343" r="343" fill="currentColor"/>
    </svg>
  )
}

export const Ellipse = ({className}) => {
  return (
    <svg className={className} width="1042" height="664" viewBox="0 0 1042 664" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="521" cy="332" rx="521" ry="332" fill="currentColor"/>
    </svg>
  )
}
