import {Button,Progress,ButtonSecondary} from '../components'
import {close,logo,leftPin,rightPin} from '../assets'
import './ModalThree.css'

type asset = {
  id:string,
  url:string,
  name:string
}


type ModalThreeProps = {
  yourAsset : asset
  opposingAsset : asset
  closeModal : () => void
  current: number
  setCurrent: (val:number) => void
}

const ModalThree = ({yourAsset,opposingAsset,closeModal,setCurrent} : ModalThreeProps) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <p className='font-tomorrow font-bold text-base text-center text-white text-opacity-90'>Multi-user Lot</p>
            <img src={close} alt="close" className='cursor-pointer' onClick={closeModal} />
        </div>
        <Progress current={3}/>
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='font-tomorrow font-semibold text-lg w-full text-center text-white text-opacity-90'>Take Position</h2>
            <div className='w-full flex justify-between items-center'>
              <div className='w-2/5 flex flex-col items-center px-4 py-4 bg-[#14172B] rounded-[10px] gap-4'>
                <p className='font-tomorrow font-semibold text-sm text-center capitalize text-white text-opacity-70 opacity-90'>Your Asset</p>
                <img src={yourAsset.url} className='w-12 h-12' alt={yourAsset.name} />
                <p className='font-tomorrow font-semibold text-sm text-center capitalize text-white text-opacity-70 opacity-90'>{yourAsset.name}</p>
              </div>
              <div className='flex justify-between items-center'>
                <img src={leftPin} alt="pins" />
                <img src={logo} alt='logo' />
                <img src={rightPin} alt="pins" />
              </div>
              <div className='w-2/5 flex flex-col items-center px-4 py-4 bg-[#14172B] rounded-[10px] gap-4'>
                <p className='font-tomorrow font-semibold text-sm text-center capitalize text-white text-opacity-70 opacity-90'>Opposing Asset</p>
                <img src={opposingAsset.url} className='w-12 h-12' alt={opposingAsset.name} />
                <p className='font-tomorrow font-semibold text-sm text-center capitalize text-white text-opacity-70 opacity-90'>{opposingAsset.name}</p>
              </div>
            </div>
        </div>
        <div className='w-full mt-6 pb-10 flex flex-col gap-6'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <label htmlFor="pool-fund" className='font-tomorrow font-medium text-sm text-center text-white text-opacity-70 opacity-90'>Fund your Pool (Ethereum)</label>
            <input type="number" id='pool-fund' name='pool-fund' className='w-full py-3 px-4 gap-9 bg-[#14172B] rounded-2xl font-tomorrow font-semibold text-base text-white text-opacity-90 opacity-90' />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <label htmlFor="lot-start" className='font-tomorrow font-medium text-sm text-center text-white text-opacity-70 opacity-90'>Lot Starts On</label>
            <input type="date" id='lot-start' name='lot-start' className='w-full py-3 px-4 gap-9 bg-[#14172B] rounded-2xl font-tomorrow font-semibold text-base text-white text-opacity-90 opacity-90' />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <label htmlFor="lot-end" className='font-tomorrow font-medium text-sm text-center text-white text-opacity-70 opacity-90'>Lot Ends On</label>
            <input type="date" id='lot-end' name='lot-end' className='w-full py-3 px-4 gap-9 bg-[#14172B] rounded-2xl font-tomorrow font-semibold text-base text-white text-opacity-90 opacity-90' />
          </div>
        </div>
        <div className='w-full flex justify-between items-center gap-4'>
          <ButtonSecondary onClick={()=>setCurrent(2)}>Back</ButtonSecondary>
          <Button onClick={closeModal} >Create Lot</Button>
        </div>
        
        </>
  )
}

export default ModalThree