import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import twitter from '../../img/twitter.png'

const Footer = () => {
    return (
        <footer className="footer">                                            
            <ul className="social_footer_ul">
                <li className='footerli'><a href="https://www.linkedin.com/in/juanse036/" className='footera'><img src={linkedin} className="footerimg"/>  Juanse036</a></li>
                <li className='footerli'><a href="https://github.com/Juanse036" className='footera'><img src={github} className="footerimg" />  Juanse036</a></li>
                <li className='footerli'><a href="https://twitter.com/juanse036" className='footera'><img src={twitter} className="footerimg" />  Juanse036</a></li>                
            </ul>         
    </footer>
    )
}

export default Footer;