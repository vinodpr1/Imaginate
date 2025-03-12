import React from 'react'
import { Button } from './ui/button'

const GenerateImage = () => {
    return (
        <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border mb-20">
            <section className="grid-background pt-36 pb-20 px-4 rounded-2xl">
                <div className="container flex flex-col justify-center items-center mx-auto text-center w-full">
                    
                    <h1 className="text-2xl font-semibold mb-4">What do you want to build?</h1>

                    <div className="max-w-3xl w-3xl justify-center items-center mb-2">
                        <div className="bg-white rounded-lg p-4 border border-gray-300">
                            <textarea
                                placeholder="How can Bolt help you today?"
                                className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none"
                                rows={3}
                            />
                        </div>
                    </div>
                     <Button className='default-button'>Generate</Button>
                </div>
            </section>
        </div>
    )
}

export default GenerateImage