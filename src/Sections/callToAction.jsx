import React from 'react'

function CallToAction() {
  return (
    <div>
      <section className="py-20 mx-auto max-w-7xl px-6 relative">
                <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-lg rounded-2xl p-12 text-center border-2 border-red-700/50 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-red-500">Join the Revolution?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Be part of the next generation of electrical engineers. Connect, learn, and innovate with SURGE.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                            Become a Member
                        </button>
                        <button className="border-2 border-red-700 hover:bg-red-700 text-red-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default CallToAction
