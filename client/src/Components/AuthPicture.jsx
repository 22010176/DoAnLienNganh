function AuthPicture() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center p-12">
      <div className="relative">
        {/* Main illustration container */}
        <div className="relative w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
          {/* Laptop */}
          <div className="relative">
            <div className="w-64 h-40 bg-slate-800 rounded-lg transform -rotate-12 shadow-xl">
              <div className="w-full h-6 bg-slate-700 rounded-t-lg flex items-center px-3 space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="p-4 bg-white rounded-b-lg h-32">
                <div className="grid grid-cols-3 gap-2 h-full">
                  <div className="bg-purple-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                  <div className="bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div className="bg-green-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                  <div className="bg-yellow-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  </div>
                  <div className="bg-pink-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  </div>
                  <div className="bg-indigo-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Person */}
            <div className="absolute -bottom-8 -left-8">
              <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
              <div className="w-20 h-12 bg-orange-500 rounded-lg -mt-2"></div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-purple-300 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-12 left-8 w-8 h-8 bg-blue-300 rounded-full"></div>
          <div className="absolute top-16 left-12 w-6 h-6 bg-yellow-300 rounded"></div>

          {/* Graduation cap */}
          <div className="absolute -top-4 -left-8 w-12 h-8 bg-slate-800 rounded transform -rotate-12">
            <div className="w-3 h-3 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
          </div>

          {/* Books stack */}
          <div className="absolute bottom-8 right-8">
            <div className="w-12 h-2 bg-blue-600 rounded mb-1"></div>
            <div className="w-12 h-2 bg-purple-600 rounded mb-1"></div>
            <div className="w-12 h-2 bg-green-600 rounded"></div>
          </div>

          {/* Clock */}
          <div className="absolute top-4 right-16 w-10 h-10 bg-white rounded-full border-4 border-purple-300 flex items-center justify-center">
            <div className="w-1 h-3 bg-purple-600 rounded absolute"></div>
            <div className="w-1 h-2 bg-purple-400 rounded absolute transform rotate-90"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthPicture;