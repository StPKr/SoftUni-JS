export default function Modal(){
return (
    <>
  {/* component */}
  <div className="flex justify-center items-center min-h-screen">
    <div x-data="{ open: true }">
      {/* Sidebar Overlay */}
      <div x-show="open" className="fixed inset-0 z-50 overflow-hidden">
        <div
          x-show="open"
          x-transition:enter="transition-opacity ease-out duration-300"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition-opacity ease-in duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
        {/* Sidebar Content */}
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div
            x-show="open"
            x-transition:enter="transition-transform ease-out duration-300"
            x-transition:enter-start="transform translate-x-full"
            x-transition:enter-end="transform translate-x-0"
            x-transition:leave="transition-transform ease-in duration-300"
            x-transition:leave-start="transform translate-x-0"
            x-transition:leave-end="transform translate-x-full"
            className="w-screen max-w-md"
          >
            <div className="h-full flex flex-col py-6 bg-white shadow-xl">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-semibold text-black">Search</h2>
                <button
                  x-on:click="open = false"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    x-description="Heroicon name: x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Search Input */}
              <div className="mt-4 px-4">
                <input
                  type="text"
                  placeholder="Search post here"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div className="mt-4 px-4">
                <p className="ml-2 text-gray-400">Results</p>
              </div>
              {/* Sidebar Content */}
              <div className="mt-4 px-4 h-full overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 1
                    </h3>
                    <p className="text-gray-600">Content for card 1.</p>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 2
                    </h3>
                    <p className="text-gray-600">Content for card 2.</p>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 3
                    </h3>
                    <p className="text-gray-600">Content for card 3.</p>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 4
                    </h3>
                    <p className="text-gray-600">Content for card 4.</p>
                  </div>
                  {/* Card 5 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 5
                    </h3>
                    <p className="text-gray-600">Content for card 5.</p>
                  </div>
                  {/* Card 6 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 6
                    </h3>
                    <p className="text-gray-600">Content for card 6.</p>
                  </div>
                  {/* Card 7 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 7
                    </h3>
                    <p className="text-gray-600">Content for card 7.</p>
                  </div>
                  {/* Card 8 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 8
                    </h3>
                    <p className="text-gray-600">Content for card 8.</p>
                  </div>
                  {/* Card 9 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 9
                    </h3>
                    <p className="text-gray-600">Content for card 9.</p>
                  </div>
                  {/* Card 10 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 10
                    </h3>
                    <p className="text-gray-600">Content for card 10.</p>
                  </div>
                  {/* Card 11 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 11
                    </h3>
                    <p className="text-gray-600">Content for card 11.</p>
                  </div>
                  {/* Card 12 */}
                  <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Card 12
                    </h3>
                    <p className="text-gray-600">Content for card 12.</p>
                  </div>
                  {/* Add more cards as needed */}
                </div>
              </div>
              {/* Sidebar Footer */}
              <div className="mt-6 px-4">
                <button className="flex justify-center items-center bg-black text-white rounded-md text-sm p-2 gap-1">
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>{" "}
                  Filters{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Your main content goes here */}
      {/* Open sidebar button */}
      <button
        x-on:click="open = true"
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        {" "}
        Open Sidebar{" "}
      </button>
    </div>
  </div>
  {/* Include Alpine.js */}
</>

    );
}