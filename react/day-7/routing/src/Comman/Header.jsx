import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
    
      <Link to={'/'} > Home  | </Link>
      <Link to={'/about'} > About | </Link>
      <Link to={'/gallery'} > Gallery | </Link>
      <Link to={'/contact'} > Contact </Link>
       
        
         
    </div>
  )
}
