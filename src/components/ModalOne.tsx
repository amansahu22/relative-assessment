import {Assets,Button,Progress,} from '.'
import {close} from '../assets'
import './ModalOne.css'

type asset = {
    id:string,
    url:string,
    name:string
}

type ModalOneProps = {
    closeModal : () => void
    current: number
    setCurrent: (val:number) => void
} 

const inActiveParaClasses = 'font-jamjuree font-semibold text-base text-[#56565A] opacity-90';

const ModalOne = ({closeModal,setCurrent}:ModalOneProps) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <p className='font-tomorrow font-bold text-base text-center text-white text-opacity-90'>Multi-user Lot</p>
            <img src={close} alt="close" className='cursor-pointer' onClick={closeModal} />
        </div>
        <Progress current={1}/>
        <div className='flex flex-col items-start gap-5'>
            <h2 className='font-tomorrow font-semibold text-lg w-full text-center text-white text-opacity-90'>Choose your Asset</h2>
            <input type='text' className='modalOne__input placeholder-[#56565A] text-base' placeholder="Search Token eg. ETH, Gold etc" />
        </div>
        <div className='flex justify-between items-center p-3 mt-2'>
            <p className='box-border text-center py-1 px-4 rounded-xl modalOne__para text-white text-base font-semibold font-jamjuree opacity-90'>Crypto</p>
            <p className={inActiveParaClasses}>Indexes</p>
            <p className={inActiveParaClasses}>Stocks</p>
            <p className={inActiveParaClasses}>Commodities</p>
            <p className={inActiveParaClasses}>Forex</p>
        </div>
        <div className='mb-6 max-h-80 overflow-scroll overflow-x-hidden modalOne__scrollbar'>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
        </div>
        <Button onClick={()=>setCurrent(2)}>Next</Button>
    </>
  )
}

export default ModalOne