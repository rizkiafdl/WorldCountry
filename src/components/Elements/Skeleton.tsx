import { IoChevronBack } from "react-icons/io5";


const Skeleton = () => {
    return (
        <div>

            <div
                className="inline-block p-2 m-8 rounded-md cursor-pointer bg-black"
            >
                <div className="text-xl">
                    Back
                </div>
                <IoChevronBack size={32} />
            </div>
            <div className='flex flex-wrap justify-center items-center min-h-screen'>

                <div className="flex w-full max-w-md flex-col gap-6 p-4 md:max-w-lg lg:max-w-xl">
                    <div className="flex items-center gap-6">
                        <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-6 w-32"></div>
                            <div className="skeleton h-6 w-40"></div>
                        </div>
                    </div>
                    <div className="skeleton h-40 w-full"></div>
                </div>
            </div>
        </div>


    )
}

export default Skeleton