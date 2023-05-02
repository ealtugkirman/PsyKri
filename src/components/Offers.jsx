import { CgSearchFound } from "react-icons/cg";
import { BiUniversalAccess } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { BsPersonFillGear } from "react-icons/bs";
import { GiTelepathy } from "react-icons/gi";

function Offers() {
  return (
    <div className="py-60  md:py-52 section">
      <h3 className="header">WHAT PSY-KRI OFFERS?</h3>
      <p className="secondheader my-4 ">
        Psy-Kri for Psychologist Use{" "}
        <span className="text-red-500 underline"> Only</span>
      </p>
      <div className="container  mt-12 mx-auto font-bold font-second  max-w-7xl p-2 md:p-2">
        {/* <!-- Grid Container --> */}
        <div className="text-white grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-row-2">
          {/* <!-- box-1 --> */}
          <div className="relative p-10 rounded-xl md:rounded-none md:col-span-2 bg-purple-800">
            <div className="icon">
              <CgSearchFound />
            </div>
            <p className="relative z-10 mt-6 text-xl">DIAGNOSIS</p>
            <p className="mt-6 ">
              Receive a diagnosis based on the symptoms and criteria you have
              inputted.
            </p>
          </div>

          {/* <!-- box-2 --> */}
          <div className="p-10 rounded-xl md:rounded-none bg-gray-700">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <BiUniversalAccess />
            </div>
            <p className="mt-6 text-xl">CRITERIA ACCESS</p>
            <p className="mt-6 ">
              Access the criteria needed for making a diagnosis directly from
              the app.{" "}
            </p>
          </div>

          {/* <!-- box-3 --> */}
          <div className="hidden md:row-span-2 md:block p-10 rounded-xl md:rounded-none text-black bg-red-600">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <AiFillEye />
            </div>
            <p className="mt-6 text-xl">SYMPTOM TRACKING</p>
            <p className="mt-6 ">
              Track and record your symptoms in the app to help monitor your
              mental health.
            </p>
          </div>

          {/* <!-- box-4 --> */}
          <div className="p-10 rounded-xl md:rounded-none text-gray-900 bg-orange-500">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <BsPersonFillGear />
            </div>

            <p className="mt-6 text-xl">PROFILE CREATION</p>
            <p className="mt-6 ">
              Receive personalized recommendations based on your symptoms and
              diagnosis using AI.
            </p>
          </div>

          {/* <!-- box-5 --> */}
          <div className="p-10 rounded-xl md:rounded-none bg-black md:col-span-2">
            {/* <!-- img --> */}
            <div className="icon">
              <GiTelepathy />
            </div>

            <p className="mt-6 text-xl">DIRECT COMMUNICATION</p>
            <p className="mt-6 ">
              Communicate directly with your psychologist through the app for
              added convenience.
            </p>
          </div>

          <div className="p-10 rounded-xl md:rounded-none md:hidden text-gray-900 bg-red-600">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <AiFillEye />
            </div>
            <p className="mt-6 text-xl">SYMPTOM TRACKING</p>
            <p className="mt-6 ">
              Track and record your symptoms in the app to help monitor your
              mental health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
