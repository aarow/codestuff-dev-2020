import { useState, useEffect } from "react";
import Date from "./date";
import BlockContent from "@sanity/block-content-to-react";
import { parseISO, differenceInMonths } from "date-fns";

const Job = ({ _id, name, position, startDate, endDate, description }) => {
  const [yearCount, setYearCount] = useState(0);

  useEffect(() => {
    const startDateDate = parseISO(startDate);
    const endDateDate = parseISO(endDate);
    const yearCount = (
      differenceInMonths(endDateDate, startDateDate) / 12
    ).toFixed(1);
    setYearCount(yearCount);
  }, []);

  return (
    <div className="bg-gray-800 p-5 transform hover:scale-105 transition-all duration-200 hover:shadow-2xl font-mono tracking-tighter font-light ">
      <div className="md:grid md:grid-cols-3 gap-6">
        <div className="flex ">
          <span className=" w-8 text-xl">{">"}</span>
          <div>
            <h3 className="text-3xl md:text-3xl md:mb-3 leading-9 leading-none flex">
              <span>{name}</span>
            </h3>
            <div className="text-sm mb-4 mt-2 md:mt-4">
              <Date dateString={startDate} dateFormat="LLL yyyy" />
              &ndash;
              <Date dateString={endDate} dateFormat="LLL yyyy" />
              <span> ({yearCount} years)</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 md:pl-6 pt-3 md:pt-0 border border-none border-t-dashed md:border-t-0 md:border-l-dashed border-light-white ml-8">
          <h4 className="text-2xl md:text-3xl mb-3  leading-none">
            {position}
          </h4>
          <div className="text-l md:text-lg leading-6 md:leading-8 mt-4">
            <BlockContent
              blocks={description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
