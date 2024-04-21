import styles from "../app/dashboard/styles.module.css"

import {LOGO_URL} from "../utils/constant"

const Header = () =>{
    return (
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <img src = {LOGO_URL} alt="image" className={styles.logo} />
        </div>
        
        <div>
        <h1 className={styles.header_name}>Product Listing Page</h1>
        </div>
        <div className={styles.nav_item} >
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header ;

