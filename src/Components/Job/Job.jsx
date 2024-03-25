import { CiLocationOn } from "react-icons/ci";
import { LuBadgeDollarSign } from "react-icons/lu";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
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
    <div className="mt-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body gap-3">
          <h2 className="card-title">{job_title}!</h2>
          <p>{company_name}</p>
          <div className="card-actions justify-center gap-6">
            <button className="px-6 py-2 border-2 bg-[white] border-[#8b8bcf93] rounded-xl text-[#5151f1e1] text-normal font-semibold">
              {remote_or_onsite}
            </button>
            <button className="px-6 py-2 border-2 bg-[white] border-[#8b8bcf93] rounded-xl text-[#5151f1e1] text-normal font-semibold">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <div>
                <CiLocationOn />
              </div>
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1">
              <LuBadgeDollarSign />
              <p>Salary : {salary}</p>
            </div>
          </div>
        </div>
              <div className="flex justify-center pb-6">
              <button className="btn btn-secondary  w-36">View Details</button>
       </div>
      </div>
    </div>
  );
};

export default Job;
