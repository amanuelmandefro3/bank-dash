import * as React from "react"
const BusinessLoans = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <circle cx={22.5} cy={22.5} r={22.5} fill="#FFE0EB" />
    <g fill="#FF82AC" clipPath="url(#a)">
      <path d="M22.859 32h-1.406a1.267 1.267 0 0 1-1.266-1.266v-8.718c0-.698.568-1.266 1.266-1.266h1.406c.698 0 1.265.568 1.265 1.266v8.718c0 .698-.567 1.266-1.265 1.266ZM17.515 32H16.11a1.267 1.267 0 0 1-1.266-1.266v-5.906c0-.698.568-1.265 1.266-1.265h1.406c.698 0 1.266.567 1.266 1.265v5.906c0 .698-.568 1.266-1.266 1.266ZM28.203 32h-1.406a1.267 1.267 0 0 1-1.266-1.266V19.062h-.773a.905.905 0 0 1-.83-.532.905.905 0 0 1 .136-.976l.009-.01 3.008-3.357a.562.562 0 0 1 .838 0l3.008 3.357a.905.905 0 0 1 .145.986.905.905 0 0 1-.83.533h-.773v11.671c0 .698-.568 1.266-1.266 1.266Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M14 14h18v18H14z" />
      </clipPath>
    </defs>
  </svg>
)
export default BusinessLoans
