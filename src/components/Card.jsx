import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { allClass } from "../services/get-allclass";
import { Progress } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export const Card = ({
  isCourse,
  myClass,
  isTopik,
  filteredType,
  filterCategory,
}) => {
  const [classData, setClassData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const data = await allClass(page);
      // console.log(data);
      setClassData(data.data.classes);
    } catch (error) {
      console.error("Error fetching class data:", error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [page]);



  const getById = (id, mapping) => {
    const match = mapping.find((item) => item.id === id);
    return match ? match.label : "Unknown";
  };

  const typeMapping = [
    { id: 1, label: "GRATIS" },
    { id: 2, label: "PREMIUM" },
  ];
  const levelMapping = [
    { id: 1, label: "Beginner" },
    { id: 2, label: "Intermediate" },
    { id: 3, label: "Advanced" },
  ];
  const categoryMapping = [
    { id: 1, label: "UI/UX Design" },
    { id: 2, label: "Product Management" },
    { id: 3, label: "Web Development" },
    { id: 4, label: "Android Development" },
    { id: 5, label: "IOS Development" },
    { id: 6, label: "Data Science" },
  ];


  const filteredClasses = () => {
    let filterResult = classData;

    const typeFilters = {
      premium: 2,
      gratis: 1,
    };

    const categoryFilters = {
      "UI/UX Design": 1,
      "Product Management": 2,
      "Web Development": 3,
      "Android Development": 4,
      "IOS Development": 5,
      "Data Science": 6,
    };

    if (filteredType in typeFilters) {
      filterResult = filterResult.filter(
        (value) => value.type_id === typeFilters[filteredType]
      );
    }

    if (filterCategory in categoryFilters) {
      filterResult = filterResult.filter(
        (value) => value.category_id === categoryFilters[filterCategory]
      );
    }

    return filterResult;
  };

  const data = filteredClasses();

  const calculateTotalDuration = (classItem) => {
    let totalDuration = 0;
    classItem.chapters.forEach((chapter) => {
      chapter.videos.forEach((video) => {
        totalDuration += video.time || 0;
      });
    });

    const totalHours = Math.floor(totalDuration / 60);
    const totalMinutes = totalDuration % 60;

    return `${totalHours} jam ${totalMinutes} menit`;
  };


  return (
    // <div className="flex justify-between gap-3 overflow-x-auto  laptop:flex-wrap">
    <>
      {data.map((value) => (
        <div
          div
          key={value.id}
          className=" bg-white w-[22rem] laptop:w-[18rem]  rounded-3xl shadow-md "
        >
          <div className="h-[6rem] overflow-hidden rounded-t-3xl mb-1">
          <img
            className="h-full w-full object-cover"
            src={value.image_url}
            alt="Logo"
          />
          </div>
          <div className="px-3 pb-3 w-[22rem] laptop:w-[18rem] ">
            <div className="flex justify-between   ">
              <p className="font-bold text-xs text-[#6148FF]">
                {getById(value.category_id, categoryMapping)}
              </p>
              <p className="flex gap-1 text-xs">
                <FontAwesomeIcon icon={faStar} className=" text-[#F9CC00]" />
                {value.rating}
              </p>
            </div>
            <p className="font-bold text-xs ">{value.name}</p>
            <p className="text-xs">by {value.author}</p>
            <div className="flex w-full  justify-between">
              <p className="text-[#6148FF] flex  items-center py-1 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M10.5 5.5C10.5 8.275 8.58 10.87 6 11.5C3.42 10.87 1.5 8.275 1.5 5.5V2.5L6 0.5L10.5 2.5V5.5ZM6 10.5C7.875 10 9.5 7.77 9.5 5.61V3.15L6 1.59L2.5 3.15V5.61C2.5 7.77 4.125 10 6 10.5ZM7.525 8L5.985 7.075L4.45 8L4.855 6.25L3.5 5.08L5.29 4.925L5.985 3.275L6.685 4.92L8.475 5.075L7.115 6.25L7.525 8Z"
                    fill="#73CA5C"
                  />
                </svg>{" "}
                {getById(value.level_id, levelMapping)}
              </p>
              <p className=" flex  items-center text-xs pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3.3335 1.7334H9.3335V2.25007H3.3335V1.7334Z"
                    fill="#73CA5C"
                  />
                  <path
                    d="M9.66664 2.66675H3.28664C3.20158 2.66554 3.11764 2.64712 3.03988 2.61259C2.96213 2.57806 2.89218 2.52815 2.83424 2.46585C2.7763 2.40355 2.73159 2.33017 2.70278 2.25012C2.67398 2.17007 2.66168 2.08501 2.66664 2.00008C2.66623 1.83107 2.73003 1.6682 2.84513 1.54444C2.96023 1.42067 3.11804 1.34525 3.28664 1.33341H9.66664C9.75505 1.33341 9.83983 1.2983 9.90235 1.23578C9.96486 1.17327 9.99998 1.08849 9.99998 1.00008C9.99998 0.911676 9.96486 0.826891 9.90235 0.764379C9.83983 0.701867 9.75505 0.666748 9.66664 0.666748H3.28664C2.94117 0.678847 2.6139 0.824646 2.37386 1.0734C2.13382 1.32214 1.99977 1.6544 1.99998 2.00008C1.99675 2.05448 1.99675 2.10902 1.99998 2.16341C1.99677 2.18998 1.99677 2.21684 1.99998 2.24341V10.0001C1.99977 10.3458 2.13382 10.678 2.37386 10.9268C2.6139 11.1755 2.94117 11.3213 3.28664 11.3334H9.66664C9.75505 11.3334 9.83983 11.2983 9.90235 11.2358C9.96486 11.1733 9.99998 11.0885 9.99998 11.0001V3.02341C10.0002 2.93273 9.96581 2.84537 9.90389 2.77912C9.84197 2.71286 9.75714 2.67268 9.66664 2.66675ZM9.33331 10.6667H3.28664C3.11804 10.6549 2.96023 10.5795 2.84513 10.4557C2.73003 10.332 2.66623 10.1691 2.66664 10.0001V3.18341C2.85617 3.28797 3.07028 3.33977 3.28664 3.33341H9.33331V10.6667Z"
                    fill="#73CA5C"
                  />
                </svg>
                {value.modules} Modul
              </p>
              <p className=" flex  items-center text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M6.99984 12.8334C3.77809 12.8334 1.1665 10.2218 1.1665 7.00008C1.1665 3.77833 3.77809 1.16675 6.99984 1.16675C10.2216 1.16675 12.8332 3.77833 12.8332 7.00008C12.8332 10.2218 10.2216 12.8334 6.99984 12.8334ZM7.58317 7.00008V4.08342H6.4165V8.16675H9.9165V7.00008H7.58317Z"
                    fill="#73CA5C"
                  />
                </svg>
                {calculateTotalDuration(value)}
              </p>
            </div>
            {isCourse && (
              <button className="flex items-center text-xs text-white bg-[#6148FF] py-1 px-3 rounded-xl gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.99992 1H4.04592L2.99692 4H1.19092L2.55292 1.276C2.59448 1.19305 2.65831 1.12331 2.73725 1.07456C2.81619 1.02582 2.90714 1 2.99992 1ZM1.22692 5L4.24092 9.687L2.96992 5H1.22692ZM4.00592 5L5.53592 10.645C5.56303 10.7474 5.62324 10.8379 5.70716 10.9025C5.79109 10.9671 5.89402 11.0021 5.99992 11.0021C6.10582 11.0021 6.20875 10.9671 6.29267 10.9025C6.3766 10.8379 6.4368 10.7474 6.46392 10.645L7.99792 5H4.00592ZM9.03392 5L7.75992 9.685L10.7729 5H9.03292H9.03392ZM10.8089 4H9.00592L7.95592 1H8.99992C9.09287 0.999818 9.18403 1.02555 9.26316 1.0743C9.3423 1.12305 9.40628 1.1929 9.44792 1.276L10.8089 4ZM7.94692 4H4.05692L5.10492 1H6.89492L7.94692 4Z"
                    fill="#EBF3FC"
                  />
                </svg>
                Rp {value.price}
              </button>
            )}
            {myClass && (
              <div className="flex items-center text-xs text-white rounded-xl gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6.5833 0.184082V1.36242C9.14413 1.67742 10.9583 4.00492 10.6433 6.56575C10.375 8.68908 8.70663 10.3749 6.5833 10.6257V11.7924C9.79163 11.4716 12.125 8.62492 11.8041 5.41658C11.5416 2.64575 9.34247 0.458249 6.5833 0.184082ZM5.41663 0.201582C4.27913 0.312415 3.19413 0.749915 2.30747 1.48492L3.14163 2.34825C3.79497 1.82325 4.58247 1.48492 5.41663 1.36825V0.201582ZM1.48497 2.30742C0.7556 3.19253 0.306752 4.27505 0.195801 5.41658H1.36247C1.4733 4.58825 1.79997 3.80075 2.31913 3.14158L1.48497 2.30742ZM8.04163 3.95825L5.19497 6.80492L3.9583 5.56825L3.33997 6.18658L5.19497 8.04158L8.65997 4.57658L8.04163 3.95825ZM0.201634 6.58325C0.318301 7.72658 0.767467 8.80575 1.4908 9.69241L2.31913 8.85825C1.80401 8.19885 1.47561 7.4131 1.3683 6.58325H0.201634ZM3.14163 9.71575L2.30747 10.5149C3.19109 11.2515 4.27287 11.7102 5.41663 11.8332V10.6666C4.58678 10.5593 3.80104 10.2309 3.14163 9.71575Z"
                    fill="#73CA5C"
                  />
                </svg>
                <Progress
                  value={50}
                  size="md"
                  color="indigo"
                  label="Completed"
                />
                ;
              </div>
            )}
            {isTopik &&
              (value.type_id === 2 ? (
                <button className="flex items-center text-xs text-white bg-[#6148FF] py-1 px-3 rounded-xl gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.99992 1H4.04592L2.99692 4H1.19092L2.55292 1.276C2.59448 1.19305 2.65831 1.12331 2.73725 1.07456C2.81619 1.02582 2.90714 1 2.99992 1ZM1.22692 5L4.24092 9.687L2.96992 5H1.22692ZM4.00592 5L5.53592 10.645C5.56303 10.7474 5.62324 10.8379 5.70716 10.9025C5.79109 10.9671 5.89402 11.0021 5.99992 11.0021C6.10582 11.0021 6.20875 10.9671 6.29267 10.9025C6.3766 10.8379 6.4368 10.7474 6.46392 10.645L7.99792 5H4.00592ZM9.03392 5L7.75992 9.685L10.7729 5H9.03292H9.03392ZM10.8089 4H9.00592L7.95592 1H8.99992C9.09287 0.999818 9.18403 1.02555 9.26316 1.0743C9.3423 1.12305 9.40628 1.1929 9.44792 1.276L10.8089 4ZM7.94692 4H4.05692L5.10492 1H6.89492L7.94692 4Z"
                      fill="#EBF3FC"
                    />
                  </svg>
                  {getById(value.type_id, typeMapping)}
                </button>
              ) : (
                <button 
                onClick={() => {
                  navigate(`/coba/${value.id}`, {
                    state: {
                      id : value.id,
                    },
                    
                  })
                }} 
                className="flex items-center text-xs text-white bg-[#6148FF] py-1 px-3 rounded-xl gap-3 ">
                  {getById(value.type_id, typeMapping)}
                </button>
              ))}
          </div>
        </div>
      ))}
    </>
    // </div>
  );
};
