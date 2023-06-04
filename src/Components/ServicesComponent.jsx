import React from 'react'
import line from '../assets/line.svg';

const ServicesComponent = () => {
  return (
    <div className="flex flex-row gap-[56px] px-[100px]  pt-[120px] pb-[200px] ">
      {/* col 1 */}
      <div className="flex flex-col w-[60%] gap-[48px]">
        <h2 className="font-heading text-white text-[96px] font-[400] leading-[112.03px]">
          A new wave of <text className="text-secondary p-0 hover:text-primary"> collectibles</text> is about to hit the <text className="text-primary p-0  hover:text-secondary"> blockchain </text>
        </h2>
        <img className='w-[100px]' src={line} alt="" />
        <div className="text-white font-sans text-[16px] text-[300] w-[494px]">
          Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.
        </div>
      </div>
      {/* col 2 */}
      <div className="flex flex-col w-[40%] gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          <h3 className="font-heading text-white text-[48px] font-[400] leading-[56.02px]">
            Thousands of unique NFTs
          </h3>
          <img className='w-[100px]' src={line} alt="" />
          <div className="text-white font-sans text-[16px] text-[300]">
            Each character is entirely unique and is generated by combining attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind.
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="font-heading text-white text-[48px] font-[400] leading-[56.02px]">
            Secure the most rare
          </h3>
          <img className='w-[100px]' src={line} alt="" />
          <div className="text-white font-sans text-[16px] text-[300]">
            Even though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and raw materials - the rarer the attributes, the rarer your character will be.
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="font-heading text-white text-[48px] font-[400] leading-[56.02px]">
            Our environmental impact matters to us.
          </h3>
          <img className='w-[100px]' src={line} alt="" />
          <div className="text-white font-sans text-[16px] text-[300]">
            Even though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and raw materials - the rarer the attributes, the rarer your character will be.
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServicesComponent