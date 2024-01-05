import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import RealSkills from "../assets/Logo/Single_Logo.svg";
import RealSkillsText from "../assets/Logo/RealSkills_Text.svg";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearch } from "../services/search";

export const Search = () => {
  const [open, setOpen] = React.useState(false);
  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const dataSearch = await fetchSearch(search);
      setSearchData(dataSearch);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchData) {
      navigate("/search?query=" + search, {
        state: { results: searchData.classes, query: search },
      });
    }
  }, [searchData, search]);

  const enter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between items-center py-4 px-4 bg-[#6148FF] gap-6 laptop:hidden ">
      <React.Fragment>
        <Button
          className="bg-[#6148FF] shadow-lg"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 18H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 6H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          className="bg-[#6148FF]"
        >
          <div className="mb-2 flex items-center justify-between p-4 ">
            <Typography variant="h5" color="blue-gray">
              <Link to="/">
              <div className="flex  items-center gap-2">
                <img src={RealSkills} alt=" " className="w-12 h-12" />
                <img src={RealSkillsText} alt="" className="w-24 h-12" />
              </div>
              </Link>
            </Typography>
            <IconButton
              variant="text"
              color="white"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            <ListItem>
              <ListItemPrefix className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M10.25 4.25H22.625V5.75H10.25V4.25ZM2.375 5C2.375 5.59334 2.55095 6.17336 2.88059 6.66671C3.21024 7.16006 3.67877 7.54458 4.22695 7.77164C4.77513 7.9987 5.37833 8.05811 5.96027 7.94236C6.54221 7.8266 7.07676 7.54088 7.49632 7.12132C7.91588 6.70176 8.2016 6.16721 8.31736 5.58527C8.43311 5.00333 8.3737 4.40013 8.14664 3.85195C7.91958 3.30377 7.53506 2.83524 7.04171 2.50559C6.54836 2.17595 5.96834 2 5.375 2C4.57962 2.00089 3.81708 2.31725 3.25467 2.87967C2.69225 3.44208 2.37589 4.20462 2.375 5ZM5.375 3.5C5.67167 3.5 5.96168 3.58797 6.20836 3.7528C6.45503 3.91762 6.64729 4.15189 6.76082 4.42597C6.87435 4.70006 6.90406 5.00166 6.84618 5.29264C6.7883 5.58361 6.64544 5.85088 6.43566 6.06066C6.22588 6.27044 5.95861 6.4133 5.66764 6.47118C5.37666 6.52906 5.07506 6.49935 4.80097 6.38582C4.52689 6.27229 4.29262 6.08003 4.1278 5.83336C3.96297 5.58668 3.875 5.29667 3.875 5C3.87545 4.60231 4.03363 4.22104 4.31483 3.93983C4.59604 3.65863 4.97731 3.50045 5.375 3.5ZM10.25 11.75H22.625V13.25H10.25V11.75ZM5.375 15.5C5.96834 15.5 6.54836 15.3241 7.04171 14.9944C7.53506 14.6648 7.91958 14.1962 8.14664 13.6481C8.3737 13.0999 8.43311 12.4967 8.31736 11.9147C8.2016 11.3328 7.91588 10.7982 7.49632 10.3787C7.07676 9.95912 6.54221 9.6734 5.96027 9.55764C5.37833 9.44189 4.77513 9.5013 4.22695 9.72836C3.67877 9.95542 3.21024 10.3399 2.88059 10.8333C2.55095 11.3266 2.375 11.9067 2.375 12.5C2.37589 13.2954 2.69225 14.0579 3.25467 14.6203C3.81708 15.1827 4.57962 15.4991 5.375 15.5ZM5.375 11C5.67167 11 5.96168 11.088 6.20836 11.2528C6.45503 11.4176 6.64729 11.6519 6.76082 11.926C6.87435 12.2001 6.90406 12.5017 6.84618 12.7926C6.7883 13.0836 6.64544 13.3509 6.43566 13.5607C6.22588 13.7704 5.95861 13.9133 5.66764 13.9712C5.37666 14.0291 5.07506 13.9994 4.80097 13.8858C4.52689 13.7723 4.29262 13.58 4.1278 13.3334C3.96297 13.0867 3.875 12.7967 3.875 12.5C3.87545 12.1023 4.03363 11.721 4.31483 11.4398C4.59604 11.1586 4.97731 11.0004 5.375 11ZM10.25 19.25H22.625V20.75H10.25V19.25ZM5.375 23C5.96834 23 6.54836 22.8241 7.04171 22.4944C7.53506 22.1648 7.91958 21.6962 8.14664 21.1481C8.3737 20.5999 8.43311 19.9967 8.31736 19.4147C8.2016 18.8328 7.91588 18.2982 7.49632 17.8787C7.07676 17.4591 6.54221 17.1734 5.96027 17.0576C5.37833 16.9419 4.77513 17.0013 4.22695 17.2284C3.67877 17.4554 3.21024 17.8399 2.88059 18.3333C2.55095 18.8266 2.375 19.4067 2.375 20C2.37589 20.7954 2.69225 21.5579 3.25467 22.1203C3.81708 22.6828 4.57962 22.9991 5.375 23ZM5.375 18.5C5.67167 18.5 5.96168 18.588 6.20836 18.7528C6.45503 18.9176 6.64729 19.1519 6.76082 19.426C6.87435 19.7001 6.90406 20.0017 6.84618 20.2926C6.7883 20.5836 6.64544 20.8509 6.43566 21.0607C6.22588 21.2704 5.95861 21.4133 5.66764 21.4712C5.37666 21.5291 5.07506 21.4994 4.80097 21.3858C4.52689 21.2723 4.29262 21.08 4.1278 20.8334C3.96297 20.5867 3.875 20.2967 3.875 20C3.87545 19.6023 4.03363 19.221 4.31483 18.9398C4.59604 18.6586 4.97731 18.5004 5.375 18.5Z"
                    fill="white"
                  />
                </svg>
              </ListItemPrefix>
              <a href="/topik" className="text-white text-lg ">
                Cousre
              </a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 21 20"
                  fill="white"
                >
                  <path
                    d="M8.8335 14.1666L13.0002 9.99992L8.8335 5.83325"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 10H3"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 2.5H16.3333C16.7754 2.5 17.1993 2.67559 17.5118 2.98816C17.8244 3.30072 18 3.72464 18 4.16667V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ListItemPrefix>
              <a href="/login" className="text-white text-lg">
                Login
              </a>
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
      <div className="flex relative w-10/12 ">
        <input
          className="p-4 flex justify-between rounded-lg shadow-lg w-full text-[#6148FF]"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={enter}
        />
        <button
          onClick={handleSearch}
          className=" bg-[#6148FF] absolute right-3 mt-3 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            className="p-1"
          >
            <path
              d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
              fill="#EBF3FC"
            />
            <path
              d="M11.4118 8.58609C11.7908 8.96609 11.9998 9.46809 11.9998 10.0001H13.9998C14.0007 9.47451 13.8974 8.95398 13.6959 8.46857C13.4944 7.98316 13.1987 7.54251 12.8258 7.17209C11.3118 5.66009 8.68683 5.66009 7.17383 7.17209L8.58583 8.58809C9.34583 7.83009 10.6558 7.83209 11.4118 8.58609Z"
              fill="#EBF3FC"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
