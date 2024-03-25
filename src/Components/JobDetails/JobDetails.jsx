import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    console.log(job);



    return (
        <div>
            job details : {id}
            <p>Company : {job.company_name}</p>
        </div>
    );
};

export default JobDetails;