import maze from "../assets/maze.svg";

function Benefits() {
  return (
    <div className="section border-t-2 border-black py-12 border-b-2 space-y-12 md:space-y-0 md:mx-20 flex flex-col md:flex-row ">
      {/* Left Side */}
      <div className="md:w-1/2 flex space-y-8 md:space-y-0 flex-col">
        <h1 className="header text-gradient font-second">PSY-KRI WILL BE YOUR BEST ASSIANT</h1>
        <p className="secondheader pt-6 md:pt-0">
          Empowering psychologists with data-driven diagnoses.
        </p>
        <img src={maze} alt="" />
      </div>

      {/* Right Side */}
      <div className="md:w-1/2   flex flex-col">
        <div className="h-1/3">
          <h1 className="thirdheader">Accurate Diagnosis</h1>
          <p className="fourthheader border-b-2 pb-8 border-black">
            Psy-Kri helps you for reaching Accurate diagnoses based on APA
            criteria
          </p>
        </div>
        <div className="h-1/3 pt-8 md:pt-0 ">
          <h1 className="thirdheader">Efficient Diagnosis</h1>
          <p className="fourthheader border-b-2 pb-8 border-black">
            Efficient diagnoses, allowing psychologists to focus on developing
            personalized treatment plans
          </p>
        </div>
        <div className="h-1/3 pt-8 md:pt-0">
          <h1 className="thirdheader">Reduced Workload</h1>
          <p className="fourthheader">
            Simplified record-keeping, with patient data easily accessible and
            organized in one place
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
