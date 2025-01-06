import { useNavigate } from "react-router-dom";

function DeviceDetailsForm1({ devices }) {
  const navigate = useNavigate();
  return (
    <div id="barlowFont" className="my-5">
      <h1 className="my-5 text-2xl font-medium">Device Details</h1>
      <div>
        {devices.map((data) => (
          <div className="flex" key={data.id}>
            <div className="my-5 mr-10">
              <h1 className="my-3 font-medium">{data.deviceName}</h1>
              <div className="flex items-center">
                <h1 className="font-medium mr-10">Type of Device</h1>
                <span className="px-5 py-1 rounded-xl mx-5 transition duration-300 bg-[#69E08B]">
                  {data.deviceType}
                </span>
              </div>
              <div className="flex my-5">
                <h1 className="font-medium mr-24">Device ID</h1>
                <input
                  type="text"
                  className="rounded-lg py-1 px-5 text-[#695959]"
                  value={`#${data.deviceId}`}
                  readOnly
                />
              </div>
            </div>
            <div className="my-5 mx-5">
              <h1 className="my-3 font-medium">Condition</h1>
              <span
                className={`px-5 py-1 rounded-xl transition duration-300 ${
                  data.condition === "Good" ? "bg-[#69E08B]" : "bg-[#E54040]"
                }`}
              >
                {data.condition}
              </span>
            </div>
            <div className="my-5 mx-5">
              <h1 className="my-3 font-medium">Status</h1>
              <span
                className={`px-5 py-1 rounded-xl transition duration-300 ${
                  data.status === "ready" ? "bg-[#69E08B]" : "bg-[#E54040]"
                }`}
              >
                {data.status.charAt(0).toUpperCase() +
                  data.status.slice(1).toLowerCase()}
              </span>
            </div>
            <div className="flex justify-center items-center ml-10">
              <button
                className="bg-[#69E08B] font-medium px-5 py-2 rounded-lg ml-20"
                onClick={() => {
                  navigate(`/hublist/device-details/${data.deviceId}`);
                }}
              >
                CLICK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceDetailsForm1;
