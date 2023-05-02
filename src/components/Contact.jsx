import Lottie from 'lottie-react'
import coming from '../assets/cs.json'

function Contact() {
  return (
    <div className="section pb-52 items-center mx-auto md:ml-24  flex font-second flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2  md:mx-8">
        <p className="text-2xl font-bold font-second pt-8"> Coming Soon</p>
        <h1 className="header py-10 "> GET NOTIFIED WHEN WE LAUNCH</h1>

        <form className="">
          <div className="relative items-center mx-auto  ">
            <input
              placeholder="youre-mail"
              className="block w-full p-4 text-sm text-gray-900 border-2 border-black rounded-xl bg-gray-50"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2">
              Notify Me
            </button>
          </div>
        </form>
        <div className="py-8">
          <span className="">*Don`t worry we weill not spam you :</span>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/2">
        <div>
            <Lottie animationData={coming} />
              </div>
      </div>
    </div>
  );
}

export default Contact;
