import React from 'react'
import CARD_2 from  '../../images/CARD_2.png'
import {LucideTrendingUp, LucideTrendingUpDown, TrendingUp, TrendingUpDown} from 'lucide-react'


const AuthLayout = ({ children }) => {
  return <div className='flex'>
    <div className='w-screen h-screen md:w-[60%] px-12 pb-12'>
        <h2 className='text-lg font-medium'>Expense Tracker</h2>
        {children}
    </div>

    <div className='grid grid-cols-1 z-20'>
      

    </div>

    <div className='hidden md:block w-[50vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative '>
        <div className='w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-7'/>
        <div className='w-48 h-56 rounded-[40px] border-20 border-fuchsia-600 absolute top-[20%] -right-10'/>
        <div className='w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-7 '/>
       
        <div className='grid grid-cols-1 z-20'>
          <StatInfoCard
            icon = {<LucideTrendingUpDown/>}
            label = "Track Your Income & Expenses"
            value = "430,000"
            color = "bg-primary"
            />
        </div>
       
       
        <img 
        src= {CARD_2}
        className='w-64 lg:w-[96%] absolute bottom-10 shadow-lg shadow-blue-00/15 rounded-2xl '
        />
    </div>

  </div>
};
export default AuthLayout;

  const StatInfoCard = ({ icon, label, value, color }) => {
    return (
      <div className='flex items-center gap-4 p-4 bg-white rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/10 z-10 '> {/* Added styling for better visual appeal */}
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
          {icon}
        </div>
        <div>
          <h6 className='text-sm font-medium text-black'>{label}</h6> {/* Added styling */}
          <span className='text-xl font-bold text-gray-800'>${value}</span> {/* Added styling */}
        </div>
      </div>
    );
  };


