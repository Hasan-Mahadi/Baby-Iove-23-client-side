import React from 'react';

const Search = () => {
    return (
        <div>
            <form className=' mr-10 '>

                <div class="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                        <svg className="w-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>

                    <input type="search" id="default-search" className="block w-40 p-4  font-bold rounded-full bg-cyan-400   ps-10    " placeholder="Search " required>
                    </input>

                </div>
            </form>
        </div>
    );
};

export default Search;