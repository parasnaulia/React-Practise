import styles from "./Header.module.css"
function Header()
{
      return (<>
      <div className={styles.Container}>
            <div className={styles.logo}>
                  <img src="../../public/Myntra-Logo_PNG1.png" style={{height:"2rem",width:"2rem"}}/>
            </div>
            <div className={styles.inner}>
                  <ul>
                        <li><a href="#" target="_blank">Home</a></li>
                        <li><a href="#" target="_blank">About</a>
                        <ul>
                        <li><a href="#" target="_blank"> Portfolio</a>
                        <ul>
                        <li><a href="#" target="_blank"> Cse</a></li>
                        <li><a href="#" target="_blank"> civil</a></li>
                        <li><a href="#" target="_blank"> Mechanical</a></li>
                        <li><a href="#" target="_blank"> Ec</a></li>
                        </ul>
                        </li>
                        <li><a href="#" target="_blank"> Resume</a></li>
                        <li><a href="#" target="_blank"> Engineer</a>
                        <ul>
                        <li><a href="#" target="_blank"> Cse</a></li>
                        <li><a href="#" target="_blank"> civil</a></li>
                        <li><a href="#" target="_blank"> Mechanical</a></li>
                        <li><a href="#" target="_blank"> Ec</a></li>

                        </ul>
                        </li>
               


                        </ul>
                        </li>
                        <li><a href="#" target="_blank"> Contact</a>
                        <ul>

                        <li><a href="#" target="_blank"> Cse</a></li>
                        <li><a href="#" target="_blank"> civil</a></li>
                        <li><a href="#" target="_blank"> Mechanical</a>
                        
                        <ul>

                        <li><a href="#" target="_blank"> Cse</a></li>
                        <li><a href="#" target="_blank"> civil</a></li>
                        <li><a href="#" target="_blank"> Mechanical</a></li>
                        <li><a href="#" target="_blank"> Ec</a></li>

                        </ul>
                        </li>
                        <li><a href="#" target="_blank"> Ec</a></li>

                        </ul>
                        
                        </li>
                        <li><a href="#" target="_blank"> Help</a></li>
                        <li>
                              <a>
                                    Bag
                              </a>
                        </li>
                  </ul>
            </div>
           
      </div>
      </>)
}
export default Header;