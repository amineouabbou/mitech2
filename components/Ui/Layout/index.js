import { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { getFooterData } from '../../../Utilis'

const Layout = (props) => {
  const { globalProps } = props
  const { sectionsOthers: globalData } =
    globalProps?.page?.translation?.ACFGlobal || []

  const { data: footerData } = getFooterData(globalData || [])

  console.log('zzzzzz propspropsprops', props)
  console.log('Footer data', footerData)

  return (
    <div className="global">
      <Header data={globalData} />
      {props.children}
      <Footer data={footerData} />
    </div>
  )
}

export default Layout
