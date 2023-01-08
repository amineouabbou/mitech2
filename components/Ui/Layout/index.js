import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => (
  <div className="global">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
