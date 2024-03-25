import { useEffect, useState } from "react";
import Job from "../Job/Job";
Job;

const FeatureJobs = () => {

    const [job, setJob] = useState([]);
    const [limit, setLimit] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setJob(data));
    }, []);
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-3xl font-bold">
                    Job Category List
                </h2>
                <p className="text-lg font-medium w-[900px] text-center">
                Jobs in features encompass a wide array of roles across various industries, including technology, entertainment, and media. These positions often involve developing innovative products, creating captivating content, and delivering exceptional experiences to users and consumers.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {
                job.slice(0, limit).map((job, idx) => <Job key={idx} job={job}></Job>)
            }
            </div>
            <div className="flex justify-center pt-12">
                <div className={limit === job.length && 'hidden' }>
                <button onClick={() => setLimit()} className="btn btn-info w-32 text-lg font-bold text-white">
                    See Alls
                </button>
               </div>
                
            </div>
        </div>
    );
};

export default FeatureJobs;