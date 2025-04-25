import React, { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";
import { FaStar } from "react-icons/fa";

export default function FoodPage() {
    return (
        <Fragment>
            <Navbar />
            <main className="bg-gray-300 grid grid-cols-12 min-h-[180em] xl:min-h-[80em]">
                <SideBar />
                <div className=" col-span-8 h-[90vh] gap-1 p-8">
                    <h2 className="text-[1.5em] font-[500] mb-10.5">Explore Products</h2>
                    <div className="  grid grid-cols-12 gap-28 h-full">
                        {/* الجزء الايسر  */}
                        {/* العناصر */}
                        <div className="xl:col-span-8 grid xl:grid-cols-4  gap-x-31 h-[5em]  ">
                            <div className="box-foods-items xl:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 xl:pb-6 md:pr-4">
                                {/* العنصر الأول */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.2em] h-[1.2em] sm:w-[1.5em] sm:h-[1.5em] md:w-[1.87em] md:h-[1.87em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/french fries (1).png" alt="potato" />
                                    </div>
                                    <div>potato</div>
                                </div>

                                {/* العنصر الثاني */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.5em] h-[1.8em] sm:w-[2em] sm:h-[2.5em] md:w-[2.5em] md:h-[3em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/burger straight (1).png" alt="burger" />
                                    </div>
                                    <div>burger</div>
                                </div>

                                {/* العنصر الثالث */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.2em] h-[1.2em] sm:w-[1.5em] sm:h-[1.5em] md:w-[1.87em] md:h-[1.87em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/chickens leg.png" alt="chicken" />
                                    </div>
                                    <div>chicken</div>
                                </div>

                                {/* العنصر الرابع */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-0 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.5em] h-[1.5em] sm:w-[2em] sm:h-[2em] md:w-[2.5em] md:h-[2.5em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/pizza slice.png" alt="pizza" />
                                    </div>
                                    <div>pizza</div>
                                </div>

                                {/* العنصر الخامس */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.2em] h-[1.2em] sm:w-[1.5em] sm:h-[1.5em] md:w-[1.87em] md:h-[1.87em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/french fries (1).png" alt="potato" />
                                    </div>
                                    <div>potato</div>
                                </div>

                                {/* العنصر السادس */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.5em] h-[1.8em] sm:w-[2em] sm:h-[2.5em] md:w-[2.5em] md:h-[3em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/burger straight (1).png" alt="burger" />
                                    </div>
                                    <div>burger</div>
                                </div>

                                {/* العنصر السابع */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-1 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.2em] h-[1.2em] sm:w-[1.5em] sm:h-[1.5em] md:w-[1.87em] md:h-[1.87em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/chickens leg.png" alt="chicken" />
                                    </div>
                                    <div>chicken</div>
                                </div>

                                {/* العنصر الثامن */}
                                <div className="p-1 sm:p-2 text-[0.9em] sm:text-[1em] md:text-[1.25em] font-[400] w-full max-w-[10em] sm:max-w-[10.5em] h-[3em] sm:h-[3.5em] md:h-[4em] flex items-center justify-center gap-0 bg-white rounded-[0.5em] sm:rounded-[0.68em] hover:bg-[#EE57331A] hover:border hover:border-[#EE5733] cursor-pointer transition-all">
                                    <div className="w-[1.5em] h-[1.5em] sm:w-[2em] sm:h-[2em] md:w-[2.5em] md:h-[2.5em]">
                                        <img className="object-contain w-full h-full" src="./public/assets/images/pizza slice.png" alt="pizza" />
                                    </div>
                                    <div>pizza</div>
                                </div>
                            </div>
                            {/* السله  */}
                            <div className=" box-foods">
                                <div className="  flex items-center justify-between xl:gap-[1em] lg:gap-[1em] md:gap-[1em] mt-[1.6em]  text-[1.5em] font-[500]  mb-[2em] ">
                                    <div className="header-box-foods active-hover-nav-box h-[2em] border-b-3 border-[#EE5733]">
                                        <h1>Popular</h1>{" "}
                                    </div>
                                    <div>
                                        {" "}
                                        <h1>Recent</h1>
                                    </div>
                                </div>
                                <div className=" flex-box-foods flex flex-wrap gap-8 items-center sm:w-[55em] xl:w-[60em]  md:w-[50em]">
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6 ">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[16.6em] h-[20.6em] bg-white rounded-[0.81em] p-6">
                                        <div className="  w-[13.6em] h-[7.8em] bg-[#F0F1F5] rounded-[0.81em] pl-9 pt-3.5 ">
                                            <img className="object-contain w-[9em] h-[6.1em]" src="./public/assets/images/burger straight.png" alt="" />
                                        </div>
                                        <h1 className="pt-[1em] text-[1.25em] font-[500]">vegetable burger</h1>
                                        <div className="flex items-center justify-between pt-0.5 pb-[1.25em]">
                                            <div>
                                                <p className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    {" "}
                                                    $32 <span className="pt-1 line-through text-[0.75em]  font-[500] text-[#2A2A2A66]">$40</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center  gap-0.5 pt-1">
                                                <div className="text-[#FFD700]">
                                                    {" "}
                                                    <FaStar />{" "}
                                                </div>
                                                <div className="text-[0.8em]  font-[500] text-[#2A2A2A66]">2.5K</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#2A2A2A] bg-[#F0F1F5] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105 trans">
                                                    {" "}
                                                    wishlist
                                                </button>
                                            </div>
                                            <div>
                                                <button className="  w-[6.2em] h-[2.4em] text-[#FFFFFF] bg-[#EE5733] rounded-[0.375em] pr-[0.3em] pb-[0.3em] cursor-pointer hover:scale-105">
                                                    {" "}
                                                    order now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================================= */}
                        {/* الجزء الايمن  */}
                        <div className="hidden xl:block w-[18em] h-[63.88em] col-span-3 bg-white pl-4 pt-3 rounded-lg relative">
                            <h1 className="text-[2em] font-[500] ">Cart Items</h1>
                            <div className="flex gap-1.5">
                                <div>
                                    <div className="pt-5 flex items-center gap-1  h-[7em]  relative pb-5 ">
                                        <div className="pt-3 pl-[0.5em] bg-[#F0F1F5] w-[4.3em] h-[4.3em] rounded-[0.625em] ">
                                            <img src="./public/assets/images/burger straight (2).png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className=" w-[9.75em] text-[1.25em] font-[500] ">vegetable burger</h2>
                                            <div className="flex items-center gap-[6.25em] pt-1">
                                                <div className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    <p>$25</p>
                                                </div>
                                                <div className=" text-[1em] font-[500] text-[#2A2A2A66]">
                                                    <p>X3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-[85%] h-[0.94px] bg-transparent after:content-[''] after:block after:w-[100%] after:h-[1px] after:bg-[#0000001A]"></div>
                                    </div>
                                    <div className="pt-5 flex items-center gap-1  h-[7em]  relative pb-5 ">
                                        <div className="pt-3 pl-[0.5em] bg-[#F0F1F5] w-[4.3em] h-[4.3em] rounded-[0.625em] ">
                                            <img src="./public/assets/images/burger straight (2).png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className=" w-[9.75em] text-[1.25em] font-[500] ">vegetable burger</h2>
                                            <div className="flex items-center gap-[6.25em] pt-1">
                                                <div className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    <p>$25</p>
                                                </div>
                                                <div className=" text-[1em] font-[500] text-[#2A2A2A66]">
                                                    <p>X3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-[85%] h-[0.94px] bg-transparent after:content-[''] after:block after:w-[100%] after:h-[1px] after:bg-[#0000001A]"></div>
                                    </div>
                                    <div className="pt-5 flex items-center gap-1  h-[7em]  relative pb-5 ">
                                        <div className="pt-3 pl-[0.5em] bg-[#F0F1F5] w-[4.3em] h-[4.3em] rounded-[0.625em] ">
                                            <img src="./public/assets/images/burger straight (2).png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className=" w-[9.75em] text-[1.25em] font-[500] ">vegetable burger</h2>
                                            <div className="flex items-center gap-[6.25em] pt-1">
                                                <div className="text-[1.25em] font-[500] text-[#EE5733]">
                                                    <p>$25</p>
                                                </div>
                                                <div className=" text-[1em] font-[500] text-[#2A2A2A66]">
                                                    <p>X3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-[85%] h-[0.94px] bg-transparent after:content-[''] after:block after:w-[100%] after:h-[1px] after:bg-[#0000001A]"></div>
                                    </div>
                                </div>
                                <div className="absolute right-3 top-20 border-2 w-[0.34em] h-[20em] border-none bg-[#0000001A] rounded-[2em]">
                                    <div className=" border-2 w-[0.34em] h-[5em] border-none bg-[#EE5733] rounded-[2em]"></div>
                                </div>
                            </div>
                            <div className="bg-[#F0F1F566] w-[15.7em] h-[29.3em] mt-[1.25em] rounded-[0.625em] border border-dashed border-gray-300">
                                <div className="pt-[1.25em] pl-[1.12em] ">
                                    <h2 className=" text-[1em] font-[500]">Payment summary</h2>
                                    <div className="text-[#00000099] text-[1em] font-[400] flex items-center gap-[7em] pt-[1.25em] pb-[0.7em]">
                                        <div>subtotal</div>
                                        <div>$100</div>
                                    </div>
                                    <div className="relative text-[#00000099] text-[1em] font-[400] flex items-center gap-[9.5em] pb-[1.87em]">
                                        <div>tax</div>
                                        <div>$-$6</div>

                                        <div className="absolute bottom-0 left-0 w-[90%] h-[1px] bg-[#0000001A]"></div>
                                    </div>
                                    <div className="  text-[1em] font-[500] flex items-center gap-[5em] pt-[1.25em] pb-[1em]">
                                        <div>Total payment</div>
                                        <div>$94</div>
                                    </div>
                                    <h2 className="text-[1em] font-[500] pb-[1.1em]">Payment method</h2>
                                    <div className=" w-[19em] h-[5em] flex items-center gap-2 flex-wrap">
                                        <div className="w-[6.7em] h-[4.3em] bg-[#FFFFFF] pl-[0.2em] rounded-[0.624em] hover:bg-[#EE57331A] hover:border-[1px] hover:border-[#EE5733] cursor-pointer">
                                            <img className="w-[100%] h-[100%] object-contain" src="./public/assets/images/Payment options_ bank card and cash.png" alt="" />
                                        </div>
                                        <div className="w-[6.7em] h-[4.3em] bg-[#FFFFFF] pl-[1em] pt-[1em] rounded-[0.624em] hover:bg-[#EE57331A] hover:border-[1px] hover:border-[#EE5733] cursor-pointer">
                                            <img className="w-[80%] h-[80%] object-contain" src="./public/assets\images/Cash and coins.png" alt="" />
                                        </div>
                                        <div className="w-[6.7em] h-[4.3em] bg-[#FFFFFF] pl-[0.2em] rounded-[0.624em] hover:bg-[#EE57331A] hover:border-[1px] hover:border-[#EE5733] cursor-pointer">
                                            <img className="w-[100%] h-[100%] object-contain" src="./public/assets/images/visa.png" alt="" />
                                        </div>
                                        <div className="w-[6.7em] h-[4.3em] bg-[#FFFFFF] pl-[1em] pt-[0.5em] rounded-[0.624em] hover:bg-[#EE57331A] hover:border-[1px] hover:border-[#EE5733] cursor-pointer">
                                            <img className="w-[90%] h-[90%] object-contain" src="./public/assets/images/paypal logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-38 w-[13.5em] h-[2.5em] text-[#FFFFFF] text-[1em] font-[400] bg-[#EE5733] rounded-[0.375em] flex items-center justify-center cursor-pointer hover:scale-105 pb-[0.2em]">
                                        <button> Place An Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
