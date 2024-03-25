import { useEffect, useState } from "react";
import Job from "../Job/Job";
Job;

const FeatureJobs = () => {

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setJob(data));
    }, []);
    
    return (
        <div>
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-3xl font-bold">
                    Job Category List
                </h2>
                <p className="text-lg font-medium w-[900px] text-center">
                Jobs in features encompass a wide array of roles across various industries, including technology, entertainment, and media. These positions often involve developing innovative products, creating captivating content, and delivering exceptional experiences to users and consumers.
                </p>
            </div>
            {
                job.map((job, idx) => <Job key={idx} job={job}></Job>)
            }
        </div>
    );
};

export default FeatureJobs;