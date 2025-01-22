import React from "react";

function UserDetailsTable({ userDetailsComponent }) {
  return (
    <div className="overflow-auto">
      <table id="montserratFont" className="w-[75vw] mt-5">
        <thead>
          <tr>
            <th className="border-b border-black px-5 lg:px-10 py-2 lg:py-5 font-medium text-sm lg:text-2xl">
              HUB ID
            </th>
            <th className="border-b border-black px-5 lg:px-10 py-2 lg:py-5 font-medium text-sm lg:text-2xl">
              DATE
            </th>
            <th className="border-b border-black px-5 lg:px-10 py-2 lg:py-5 font-medium text-sm lg:text-2xl">
              DEVICE ID
            </th>
            <th className="border-b border-black px-5 lg:px-10 py-2 lg:py-5 font-medium text-sm lg:text-2xl">
              CYCLES
            </th>
            <th className="border-b border-black px-5 lg:px-10 py-2 lg:py-5 font-medium text-sm lg:text-2xl">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {userDetailsComponent.map((data, index) => (
            <tr
              key={index}
              className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200"
            >
              <td className="p-5 font-medium text-sm lg:text-lg">
                {data.hubid}
              </td>
              <td className="p-5 font-medium text-sm lg:text-lg">
                {new Date(data.device_booked_user_end_time).toLocaleDateString(
                  "en-GB"
                )}
              </td>
              <td className="p-5 font-medium text-sm lg:text-lg">
                {data.deviceid}
              </td>
              <td className="p-5 font-medium text-sm lg:text-lg">
                {data.booked_user_selected_wash_mode}
              </td>
              <td className="p-5 font-medium text-sm lg:text-lg">
                {data.booked_user_amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailsTable;
