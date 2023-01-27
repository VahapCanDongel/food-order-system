export default function CurrentOrderCard() {
    return (
        <div className="">
            <div className="w-[400px] min-h-[150px] bg-white-50 rounded-md m-auto shadow-md border-[1px] p-2">
                <div className="flex justify-between">
                    <div className="text-[15px]">Lamb Doner</div>
                    
                </div>

                <div className="w-[300px] min-h-[80px] text-sm">
                    <div className="flex gap-2">
                        <div className="text-xs bg-cyan-900 text-white w-[80px] rounded-sm flex justify-center items-center">
                            <div>Tomato</div>
                        </div>

                        <div className="text-xs bg-cyan-900 text-white w-[80px] rounded-sm flex justify-center items-center">
                            <div>Tomato</div>
                        </div>
                    </div>
                
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-center items-center gap-8">
                        <div className="text-sm flex gap-3">
                            <div className="bg-red-200 p-1 rounded-sm h-5 flex justify-center items-center">
                                -
                            </div>
                            <div>1</div>
                            <div className="bg-green-200 p-1 rounded-sm h-5 flex justify-center items-center">
                                +
                            </div>
                        </div>
                        <div>£10.99</div>
                    </div>
                    
                    <div className="text-sm ml-auto bg-cyan-900 text-white p-1 rounded-sm">Add Extras</div>
                </div>
            </div>



        </div>
    )
}