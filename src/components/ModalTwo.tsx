import {Assets,Button,Progress,ButtonSecondary} from '../components'
import {close} from '../assets'
import './ModalTwo.css'

const inActiveParaClasses = 'font-jamjuree font-semibold text-base text-[#56565A] opacity-90';


type ModalTwoProps = {
    closeModal : () => void
    current: number
    setCurrent: (val:number) => void
} 

const ModalTwo = ({closeModal,setCurrent}:ModalTwoProps) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <p className='font-tomorrow font-bold text-base text-center text-white text-opacity-90'>Multi-user Lot</p>
            <img src={close} alt="close" className='cursor-pointer' onClick={closeModal} />
        </div>
        <Progress current={2}/>
        <div className='flex flex-col items-start gap-5'>
            <h2 className='font-tomorrow font-semibold text-lg w-full text-center text-white text-opacity-90'>Choose Opposing Asset</h2>
            <input type='text' className='modalTwo__input placeholder-[#56565A] text-base' placeholder="Search Token eg. ETH, Gold etc" />
        </div>
        <div className='flex justify-between items-center p-3 mt-2'>
            <p className='box-border text-center py-1 px-4 rounded-xl modalTwo__para text-white text-base font-semibold font-jamjuree opacity-90'>Crypto</p>
            <p className={inActiveParaClasses}>Indexes</p>
            <p className={inActiveParaClasses}>Stocks</p>
            <p className={inActiveParaClasses}>Commodities</p>
            <p className={inActiveParaClasses}>Forex</p>
        </div>
        <div className='mb-6 max-h-80 overflow-scroll overflow-x-hidden modalTwo__scrollbar'>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
            <Assets/>
        </div>
        <div className='w-full flex justify-between items-center gap-4'>
        <ButtonSecondary onClick={()=>setCurrent(1)}>Back</ButtonSecondary>
        <Button onClick={()=>setCurrent(3)}>Next</Button>
        </div>
        
    </>
  )
}

export default ModalTwo