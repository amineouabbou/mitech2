const FB_INTRO = {
  introSolutions: {
    texte: `<p>Front Brand is a white label solution that allow you to create a mobile app to harness payments and transfer in Europe through Money International European License. Front Brand goes beyond a traditional remittance license with innovative embedded technologies and robusts solutions. <br> <br> 
        With Front Brand you have every technologies you need to create a remittance offer abroad and go propose more advanced offers that the actual market.</p>`,
  },
}

const IntroFb = ({ data }) => {
  return (
    <>
      <div className="grid w-full">
        <div
          className="bloc max-w-[695px] bloc-Solution-pres text-[14px] text-justify lg:text-left lg:leading-[28px] lg:text-[18px] text-[#737483] lg:pl-[20px] [&>p]:mb-7"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </>
  )
}

export default IntroFb
