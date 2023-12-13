import { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { getFooterData, getFooterLogos } from '../../../Utilis'

const Layout = (props) => {
  const { globalProps } = props
  const { sectionsOthers: globalData } =
    globalProps?.page?.translation?.ACFGlobal || []

  const { data: footerData } = getFooterData(globalData || [])

  const footerLogos = getFooterLogos(globalData || [])

  return (
    <div className="global">
      <Header data={globalData} />
      {props.children}
      <Footer data={{ footerData, globalProps, footerLogos }} />
    </div>
  )
}

export default Layout
