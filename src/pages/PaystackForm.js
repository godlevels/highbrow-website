import React, { useState } from 'react'
import Header from '../components/Header'
import Sides from '../img/Paystack/content.png'
import PaystackPop from '@paystack/inline-js'

const PaystackForm = () => {


    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    const [service, setService] = useState('')
    const [name, setName] = useState('')

    const payment = (e) => {
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: 'pk_live_824f72521a821c9c0e71ef85bd1044c29adb8c8b',
            amount:amount * 100,
            email,
            name,
            service,
            onSuccess(transaction){
                let message = `Payment successful! reference ${transaction.reference}`
                alert(message)
            },
            oncancel(){
                alert('You cancelled the transaction!')
            }
        })
    }

    return (
        <section>
            <Header />

            <div className='flex justify-between pt-24 mx-24 mb-10'>
                <div>
                    <h1 className='text-[#002E5A] text-[44px] font-semibold'>Place an order</h1>
                    <p className='text-[16px] text-[#1a1a1a]'>Please fill this order form to help us know your needs</p>

                    <div className='bg-[#F3F0EB] rounded-md p-10 mt-8'>
                        <form action="">
                            <div className='flex flex-col'>
                                <label className='text-[#002E5A] text-[20px] font-semibold'>What would you like us to do for you?</label>
                                <input value={service} onChange={(e)=>setService(e.target.value)} className='py-3 px-6 w-[500px] my-3 rounded-md focus:outline-neutral-600' type="text" placeholder='Type a service'/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-[#002E5A] text-[20px] font-semibold'>What is your name? </label>
                                <input value={name} onChange={(e)=>setName(e.target.value)} className='py-3 px-6 w-[500px] my-3 rounded-md focus:outline-neutral-600' type="text" placeholder='Name'/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-[#002E5A] text-[20px] font-semibold'>What is your Email address?</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='py-3 px-6 w-[500px] my-3 rounded-md focus:outline-neutral-600' type="text" placeholder='Email address'/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-[#002E5A] text-[20px] font-semibold'>Amount?</label>
                                <input value={amount} onChange={(e)=>setAmount(e.target.value)} className='py-3 px-6 w-[500px] my-3 rounded-md focus:outline-neutral-600' type="text" placeholder='Amount'/>
                            </div>
                            
                            <button type='submit' onClick={payment} className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[10px] px-[20px] rounded-3xl hover:text-[#DA7717] my-6'>Place an order</button>
                            
                        </form>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] rounded-md min-h-[500px]'>
                    <img src={Sides} alt="" />
                </div>
            </div>
        </section>
    )
}

export default PaystackForm
