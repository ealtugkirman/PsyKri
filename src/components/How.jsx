function How() {
  return (
    <div className="section border my-52">
      {/* Header */}
      <div className="">
        <h1 className="header">HOW PYS-KRI WORKS</h1>
        <p className="md:bg-black md:px-3 mt-2 md:mt-4 rounded-md text-center md:text-left md:inline-block text-black md:text-white text-xl">
          Explore Artifical Intelligence on Pyschology
        </p>
      </div>
      {/* Grid */}
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-8 md:gap-4  mx-auto">
          <div className="how row-span-1 col-span-1">
            <span className="number">01</span>
            <h1 className="howheader">Registration and Login</h1>
            <p className="howp">
              Users enter their first name, last name, email address, password,
              and other identification information to register for the
              application.
            </p>
          </div>
          <div className="how ">
            <span className="number">02</span>
            <h1 className="howheader">Symptoms and Classification</h1>
            <p className="howp">
              Users enter the patient`s symptoms, which are categorized using a
              classification tool. The classification tool guides the user to
              define the symptoms more specifically.
            </p>
          </div>
          <div className="how  ">
            <span className="number">03</span>
            <h1 className="howheader">Diagnosis</h1>
            <p className="howp">
              The application analyzes the patient`s symptoms using DSM-5
              criteria and suggests a diagnosis. The suggested diagnoses are
              displayed among the user`s options, and the user selects a
              diagnosis based on these suggestions.
            </p>
          </div>

          <div className="how ">
            <span className="number">04</span>
            <h1 className="howheader">Profile Creation and Saving</h1>
            <p className="howp">
              Users can save the patient`s symptoms and diagnosis to a profile.
              The profile is stored for later review of symptoms and diagnosis
              by the user.
            </p>
          </div>
          <div className="how ">
            <span className="number">05</span>
            <h1 className="howheader">AI Integration</h1>
            <p className="howp">
              The application offers suggestions using the AI based on the
              patient`s profile. Suggestions may cover different topics such as
              medications, therapies, or other treatment options depending on
              the patient`s diagnosis.
            </p>
          </div>
          <div className="how">
            <span className="number">06</span>
            <h1 className="howheader">Treatment Plan Creation</h1>
            <p className="howp">
              Psychologists view the patient`s symptoms and develop a treatment
              plan. The treatment plan is stored in the patient`s profile and
              includes steps and recommendations to be followed during a
              specific treatment session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
