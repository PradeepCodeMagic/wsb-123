import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
      <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"/>

      <button>
        <Link to={'/'} > Back to Home..... </Link>
      </button>
    </div>
  )
}
