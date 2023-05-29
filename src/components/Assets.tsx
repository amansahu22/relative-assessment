import {useState} from 'react'
import {crypto1,crypto2,crypto3,crypto4,crypto5} from '../assets'
import './Assets.css'

const images=[
    {
        id:'001',
        url:crypto1,
        name:'Ethereum'
    },
    {
        id:'002',
        url:crypto2,
        name:'Avalanche'
    },
    {
        id:'003',
        url:crypto3,
        name:'Cardano'
    },
    {
        id:'004',
        url:crypto4,
        name:'Chainlink'
    },
    {
        id:'005',
        url:crypto5,
        name:'Algorand'
    },

]

const Assets = () => {

  const [active,setActive] = useState<any>(null);

  const clickHandler=(val:string)=>{
    if(!active){
        setActive(val);
    }
  }
  
  return (
    <div className='flex justify-between my-4'>
        {
            images.map((image)=>{
                return <div className={`flex flex-col justify-between items-center cursor-pointer p-2 rounded-lg gap-2 border border-white border-opacity-5 ${active === image.id ? 'selected':''}`
            } key={image.id} onClick={()=>clickHandler(image.id)}>
                    <img src={image.url} alt={image.name} />
                    <p className='text-center text-white text-opacity-70 font-semibold text-sm capitalize opacity-90 font-tomorrow'>{image.name}</p>
                </div>
            })
        }
    </div>
  )
}

export default Assets