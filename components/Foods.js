export default function Foods() {
  return (
    <div className="w-full h-screen flex justify-evenly flex-col items-center">
      <form className="flex justify-evenly items-center gap-10">
        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Name: </label>
          <input
            type="text"
            className="border-[2px] border-black p-2 w-[240px]"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Price: </label>
          <input
            type="text"
            className="border-[2px] border-black p-2 w-[240px]"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Parent Category: </label>

          <select className="border-[2px] border-black p-2 h-[44px] w-[240px]">
            <option>Test</option>
          </select>
        </div>
      </form>

      <table className="border-[2px] border-black w-[800px] text-center">
        <tr className="border-[2px] border-black">
          <th className="border-[2px] border-black">Name</th>
          <th className="border-[2px] border-black">Price</th>
          <th className="border-[2px] border-black">Parent Category</th>
          <th className="border-[2px] border-black">Extras</th>
        </tr>
        <tr>
          <td className="border-[2px] border-black">Lamb Shish</td>
          <td className="border-[2px] border-black">£9.99</td>
          <td className="border-[2px] border-black">Kebabs</td>
          <td className="border-[2px] border-black"></td>
        </tr>
      </table>
    </div>
  );
}
