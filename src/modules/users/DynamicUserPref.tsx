interface UserPrefProps {
  fullName: string;
  showInterests?: boolean;
  showExpectedSalary?: boolean;
  showAvailability?: boolean;
}

function UserPref(props: UserPrefProps) {
  const {
    fullName,
    showInterests = true,
    showExpectedSalary = true,
    showAvailability = true,
  } = props;
  const renderInterestField = () => (
    <>
      <h4 className="mb-2">Interests</h4>
      <select className="mb-6" name="interests">
        <option>Machine Learning</option>
        <option>Cloud Technologies</option>
        <option>Data science and Data Analysis</option>
        <option>Front-end development</option>
        <option>UI/UX research</option>
        <option>Algorithm design</option>
      </select>
    </>
  );

  const renderAvailability = () => (
    <>
      <h4 className="mb-2">Available For</h4>
      <div className="mb-6 flex flex-col">
        <label className="flex">
          <input type="checkbox" name="availability" value="contract" />
          <span className="ml-2">Contract</span>
        </label>
        <label>
          <input type="checkbox" name="availability" value="part_time" />
          <span className="ml-2">Part-Time</span>
        </label>
        <label>
          <input type="checkbox" name="availability" value="full_time" />
          <span className="ml-2">Full Time</span>
        </label>
        <label>
          <input type="checkbox" name="availability" value="freelance" />
          <span className="ml-2">Freelance</span>
        </label>
        <label>
          <input type="checkbox" name="availability" value="project_based" />
          <span className="ml-2">Project Based</span>
        </label>
      </div>
    </>
  );
  const renderExpectedSalary = () => (
    <div className="mb-6">
      <h4 className="mb-2">Expected Salary</h4>
      <input type="text" />
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl mb-6">
        User Preference: <span className="text-teal-800">{fullName}</span>
      </h1>
      <div className="max-w-md">
        <h4 className="mb-2">Project Name</h4>
        <input className="mb-6" type="text" />

        {showInterests ? renderInterestField() : null}
        {showAvailability ? renderAvailability() : null}
        {showExpectedSalary ? renderExpectedSalary() : null}
        <button type="button" className="w-32 bg-teal-600 text-white py-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default UserPref;
