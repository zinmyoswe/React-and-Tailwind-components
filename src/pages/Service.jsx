import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faSave, 
  faDownload, 
  faPen, 
  faTrash  
} from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
      Hello world home page
       </h1>
       
       <h2 className="text-3xl font-bold">Text Decoration</h2>
       <p className="underline">The quick brown fox ...</p>
       <p className="overline">The quick brown fox ...</p>
       <p className="line-through">The quick brown fox ...</p>
       <p className="no-underline">The quick brown fox ...</p>

       <span className="text-zinc-100 md:text-red-500">$400 
        <span className="hidden md:block no-underline md:line-through text-gray-500">$500</span>
        </span>

        <hr />

        <h2 className="3xl font-bold">2. Font Size and Color</h2>
        <p class="text-sm text-blue-500 ...">text-sm</p>
        <p class="text-base text-red-500 ...">text-base...</p>
        <p class="text-lg text-green-500 ...">text-lg ...</p>
        <p class="text-xl text-yellow-500 ...">text-xl ...</p>
        <p class="text-2xl text-orange-500 ...">text-2xl ...</p>
        <p class="text-3xl text-violet-500 ...">text-3xl ...</p>
        <p class="text-4xl text-pink-500">text-4xl ...</p>
        <p class="text-5xl text-gray-500">text-5xl ...</p>
        <p class="text-6xl text-teal-500">text-6xl ...</p>
        <p class="text-7xl text-zinc-500">text-7xl ...</p>
        <p class="text-8xl text-rose-500">text-8xl ...</p>
        <p class="text-9xl text-sky-500">text-9xl ...</p>
        <hr />
        <h2 className="3xl font-bold">3. Border Radius and width height</h2>

        <div className='flex gap-4'>
          <div class="rounded-none bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-none</div>
          <div class="rounded-sm bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-sm</div>
        <div class="rounded bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded</div>
        <div class="rounded-md bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-md</div>
        <div class="rounded-lg bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-lg</div>
        <div class="rounded-xl bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-xl</div>
        <div class="rounded-2xl bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-2xl</div>
        <div class="rounded-3xl bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-3xl</div>
        <div class="rounded-full bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-full</div>

        <div class="rounded-s-none bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-s-none</div>
        <div class="rounded-s-sm bg-pink-500 w-20 h-20 text-sm px-4 py-7">rounded-s-sm</div>

        </div>

        <br></br>

        <h2 className="3xl font-bold">3.1 Rounding sides separately</h2>
        <div className='flex gap-4'>     
        <div class="rounded-t-lg bg-green-500 w-20 h-20 text-sm px-4 py-7">rounded-t-lg</div>
        <div class="rounded-r-lg bg-green-500 w-20 h-20 text-sm px-4 py-7">rounded-r-lg</div>
        <div class="rounded-b-lg bg-green-500 w-20 h-20 text-sm px-4 py-7">rounded-b-lg</div>
        <div class="rounded-l-lg bg-green-500 w-20 h-20 text-sm px-4 py-7">rounded-l-lg</div>
        
        </div>

        <br></br>

        <h2 className="3xl font-bold">3.2 border customized</h2>
        <div className='flex gap-4'>

          <div class="rounded-[12px] bg-red-500 w-20 h-20 text-sm px-4 py-7">rounded-[12px]</div>
          <div class="rounded-[22px] bg-red-500 w-20 h-20 text-sm px-4 py-7">rounded-[22px]</div>
          <div class="rounded-[32px] bg-red-500 w-20 h-20 text-sm px-4 py-7">rounded-[32px]</div>
          <div class="rounded-[42px] bg-red-500 w-20 h-20 text-sm px-4 py-7">rounded-[42px]</div>
        </div>


        <h2 className="3xl font-bold">border right left</h2>
        <div className='flex gap-4'>
          <div dir='ltr'>
              <div class="rounded-s-lg bg-yellow-500 w-20 h-20 text-sm px-4 py-7">rounded-s-lg</div>
          </div>
              
          <div dir='rtl'>
              <div class="rounded-s-lg bg-yellow-500 w-20 h-20 text-sm px-4 py-7">rounded-s-lg</div>
          </div>
         
        </div>

        <hr />

        <h2 className="3xl font-bold">4. border width</h2>
        <div className='flex gap-4 mt-4'>
            <div class="border border-sky-500 w-20 h-20">border</div>
            <div class="border-2 border-sky-500 w-20 h-20">border-2</div>
            <div class="border-4 border-sky-500 w-20 h-20">border-4</div>
            <div class="border-8 border-sky-500 w-20 h-20">border-8</div>
        </div>
        <div className='flex gap-4 mt-4'>
        <div class="border-t-4 border-indigo-500 w-20 h-20">border-t-4</div>
        <div class="border-r-4 border-indigo-500 w-20 h-20">border-r-4</div>
        <div class="border-b-4 border-indigo-500 w-20 h-20">border-b-4</div>
        <div class="border-l-4 border-indigo-500 w-20 h-20">border-l-4</div>
        </div>

        <div className='flex gap-4 mt-4'>
        <div class="border-x-4 border-y-2 border-indigo-500 w-20 h-20">border-x-4</div>
        <div class="border-y-4 border-x-2 border-indigo-500 w-20 h-20">border-y-4</div>
       
        </div>


        <h2 className="3xl font-bold">Between element</h2>
        <div className='flex gap-4 mt-4'>

              <div class="divide-y divide-slate-700 bg-gray-800 text-white w-1/5 h-20 text-center py-1">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>



       
        </div>

         <h2 className="3xl font-bold">Hover border</h2>

          <div className='flex gap-4 mt-4'>
                <div class="border-2 hover:border-t-4">
                    <div class="border border-sky-500 w-20 h-20">hover</div>
                </div>

                <div class="border-2 hover:border-yellow-500  ">
                    <div class="text-gray-800 bg-red-500 hover:bg-white w-20 h-20">hover</div>
                </div>
          </div>

           <h2 className="3xl font-bold">Border color</h2>

           <div className='flex gap-4 mt-4'>
       
            <div class="border-4 border-indigo-200 border-x-indigo-500 w-20 h-20">border-x-indigo-500</div>
            <div class="border-4 border-indigo-200 border-y-indigo-500 w-20 h-20">border-y-indigo-500</div>

           

        </div>

         <h2 className="3xl font-bold mt-4">Hover Button</h2>

         <div className='flex gap-4 mt-4'>
       
           

            <button class="border-2 border-slate-300 hover:border-slate-400 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 border-red-300 hover:border-red-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 border-blue-300 hover:border-blue-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 border-green-300 hover:border-yellow-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 border-purple-300 hover:border-purple-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 border-pink-300 hover:border-pink-500 w-32 h-10 rounded-xl">
              Send email
            </button>
          

        </div>




         <div className='flex gap-4 mt-4'>
       
           

            <button class="border-2 bg-slate-300 text-white hover:bg-white hover:text-slate-500 border-slate-300 hover:border-slate-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 bg-red-500 text-white hover:bg-white hover:text-red-500 border-red-300 hover:border-red-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-blue-300 hover:border-blue-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 border-yellow-300 hover:border-yellow-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 bg-purple-500 text-white hover:bg-white hover:text-purple-500 border-purple-300 hover:border-purple-500 w-32 h-10 rounded-xl">
              Send email
            </button>
            <button class="border-2 bg-pink-500 text-white hover:bg-white hover:text-pink-500 border-pink-300 hover:border-pink-500 w-32 h-10 rounded-xl">
              Send email
            </button>
          

        </div>

        

        <div className='flex gap-4 mt-4'>
          <button class="bg-gradient-to-r from-red-500 to-blue-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        <button class="bg-gradient-to-r from-red-500 to-pink-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        <button class="bg-gradient-to-r from-red-500 to-yellow-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        <button class="bg-gradient-to-r from-red-500 to-green-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        <button class="bg-gradient-to-r from-red-500 to-purple-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        <button class="bg-gradient-to-r from-red-500 to-slate-500 text-white w-32 h-10 rounded-xl hover:opacity-90">
          Send email
        </button>

        </div>

       


<div className='flex gap-4 mt-4'>
         <div class="w-32 h-10 rounded-xl p-[2px] bg-transparent bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300">
            <button
              class="w-full h-full rounded-[10px] bg-white text-black hover:text-black">
              Send email
            </button>
          </div>

        <div class="w-32 h-10 rounded-xl p-[2px] bg-transparent bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300">
            <button
              class="w-full h-full rounded-[10px] bg-white text-black hover:text-black">
              Send email
            </button>
          </div>

           <div class="w-32 h-10 rounded-xl p-[2px] bg-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300">
            <button
              class="w-full h-full rounded-[10px] bg-white text-black hover:text-black">
              Send email
            </button>
          </div>

           <div class="w-32 h-10 rounded-xl p-[2px] bg-transparent bg-gradient-to-r from-blue-500 to-orange-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300">
            <button
              class="w-full h-full rounded-[10px] bg-white text-black hover:text-black">
              Send email
            </button>
          </div>

           <div class="w-32 h-10 rounded-xl p-[2px] bg-transparent bg-gradient-to-r from-blue-500 to-slate-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300">
            <button
              class="w-full h-full rounded-[10px] bg-white text-black hover:text-black">
              Send email
            </button>
          </div>

        </div>

      <div className='flex gap-4 mt-4'>
       <div class="inline-block bg-gradient-to-r from-red-500 to-blue-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500"
          >
            Send email
          </button>
       </div>

       <div class="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
          >
            Send email
          </button>
       </div>

       <div class="inline-block bg-gradient-to-r from-red-500 to-teal-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-teal-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-red-500 to-teal-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-teal-500"
          >
            Send email
          </button>
       </div>

       <div class="inline-block bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
          >
            Send email
          </button>
       </div>

       <div class="inline-block bg-gradient-to-r from-red-500 to-pink-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500"
          >
            Send email
          </button>
       </div>

       <div class="inline-block bg-gradient-to-r from-red-500 to-slate-500 p-[2px] rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-slate-500">
          <button
            class="w-40 h-12 bg-gradient-to-r from-red-500 to-slate-500 text-white rounded-[10px] font-semibold transition-all duration-300
              hover:bg-white hover:text-white hover:bg-clip-text hover:border-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-slate-500"
          >
            Send email
          </button>
       </div>

       </div>

       <div className='flex gap-4 mt-4 mb-4'>
          <button
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
            Send Email
          </button>


          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Send Email
        </button>


      

      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
        <FontAwesomeIcon icon={faSave} className="mr-2" />
        Save
      </button>

      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Download
      </button>

      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
        <FontAwesomeIcon icon={faPen} className="mr-2" />
        Edit
      </button>

      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
        <FontAwesomeIcon icon={faTrash} className="mr-2" />
        Delete
      </button>

       </div>

      <hr />
       <h2 className="3xl font-bold mt-4">5. Gradient Text</h2>
        <div className='flex gap-4 mt-4'>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-zinc-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 text-xl font-bold">Gradient Text</p>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-xl font-bold">Gradient Text</p>
        </div>


        <hr />
       <h2 className="3xl font-bold mt-4">6. Aspect Ratio</h2>
        <div className='flex gap-4 mt-4'>

             <div className="w-full max-w-5xl">
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/JSFG-IE8n_c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Service