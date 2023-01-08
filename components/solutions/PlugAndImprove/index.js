import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const PlugAndImprove = ({ data }) => {
  return (
    <div className="relative bg-[url('/delete/plug-map.png')] bg-no-repeat bg-cover lg:bg-[length:698px_354px] lg:bg-[left_77%_bottom_50px]">
      <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-red-300"></div>
      <div className="flex">
        <div className="bloc-img relative h-[512px] w-[370px] mr-[65px]">
          <Image
            alt=""
            width={200}
            height={200}
            src="/delete/plug-phone.png"
            layout="fill"
          />
        </div>

        <div className="bloc pt-[20px] z-10">
          <List2 className="max-w-[550px]" data={data} />
        </div>
      </div>
      <div className="font-semibold text-[36px] text-primary leading-[42px] flex flex-col items-end mt-[40px]">
        <span>
          Check out the rich intuitive features <br />
          to empower your use case
        </span>
      </div>
    </div>
  )
}

export default PlugAndImprove
