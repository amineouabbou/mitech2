import { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { getFooterData } from '../../../Utilis'

const Layout = (props) => {
  const { global } = props
  const { sectionsOthers: globalData } =
    global?.page?.translation?.ACFGlobal || []
  const { data: footerData } = getFooterData(globalData || [])

  return (
    <div className="global">
      <Header data={globalData} />
      {props.children}
      <Footer data={footerData} />
    </div>
  )
}

export default Layout
