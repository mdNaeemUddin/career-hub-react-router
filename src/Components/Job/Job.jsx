const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    phone,
    email,
    address,
  } = job;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}!</h2>
          <p>{company_name}</p>
          <div className="card-actions justify-center gap-6">
            <button className="btn ">{remote_or_onsite}</button>
            <button className="btn btn-secondary">{job_type}</button>
                  </div>
                  <div>
                      <div>
                          <img src="" alt="" />
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
