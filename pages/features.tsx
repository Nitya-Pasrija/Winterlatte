import React from 'react'

const features = () => {
  return (
    <section className="text-gray-600 body-font bg-black mt-0.5">
  <div className="container px-3 py-10 mx-auto">
    <div className="py-16 bg-black overflow-hidden">
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div>
            <span className="text-[#0CCF89] text-lg font-semibold text-center">Main features</span>
            <h2 className="mt-4 text-2xl text-[#0CCF89] font-bold md:text-4xl">An incredibly useful, AI powered tool for taking<br className="lg:block" hidden></br> or preparing for interview rounds.</h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration"></img>
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Image preview</h5>
                        <p className="text-sm text-gray-600">When the user clicks on an image, a larger version of the image could be displayed in a pop-up window or modal. </p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-[#095b3d]">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">--></span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration"></img>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Image metadata</h5>
                        <p className="text-sm text-gray-600">When the user clicks on an image, the code could display metadata about the image, such as the file name, size, and dimensions.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">--></span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration"></img>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Different Languages </h5>
                        <p className="text-sm text-gray-600">There are many programming languages available, each with its own unique features and capabilities.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">--></span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"></img>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">More features</h5>
                        <p className="text-sm text-gray-600">To know more, see a list of out extended ppt</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">--></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>

  )
}

export default features