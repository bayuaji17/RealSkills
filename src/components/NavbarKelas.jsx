import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import {useNavigate } from "react-router-dom";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { getMe } from "../services/get-me";
import { CookieKeys, CookieStorage } from "../utils/cookies";
export const NavbarKelas = () => {
  const authToken = CookieStorage.get(CookieKeys.AuthToken)
  const [dataUser, setDataUser] = useState([]);
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  // const [berandaClick, setBerandaClick] = useState(false);
  // const [courseClick, setCourseClick] = useState(false);
  // const [kelasClick, setKelasClick] = useState(false);
  // const [notificationClick, setNotificationClick] = useState(false);
  // const [profileClick, setProfileClick] = useState(false);
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const searchResults = (e) => {
    e.preventDefault();
    navigate(`/search`);
    setResult();
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      searchResults(e);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const data = await getMe(authToken);
  //     console.log(data);
  //     setDataUser(data.data);
  //   } catch (error) {
  //     console.error("Error fetching class data:", error);
  //   }
  // };
  
  
    // useEffect(() => {
    //   fetchData();
    // }, [authToken]);

  // const handleBeranda = () => {
  //   setBerandaClick(true);
  //   setCourseClick(false);
  //   setKelasClick(false);
  //   setNotificationClick(false);
  //   setProfileClick(false);
  // };
  // const handleCourse = () => {
  //   setBerandaClick(false);
  //   setCourseClick(true);
  //   setKelasClick(false);
  //   setNotificationClick(false);
  //   setProfileClick(false);
  // };

  // const handleKelas = () => {
  //   setBerandaClick(false);
  //   setCourseClick(false);
  //   setKelasClick(true);
  //   setNotificationClick(false);
  //   setProfileClick(false);
  // };

  // const handleNotif = () => {
  //   setBerandaClick(false);
  //   setCourseClick(false);
  //   setKelasClick(false);
  //   setNotificationClick(true);
  //   setProfileClick(false);
  // };

  // const handleProfile = () => {
  //   setBerandaClick(false);
  //   setCourseClick(false);
  //   setKelasClick(false);
  //   setNotificationClick(false);
  //   setProfileClick(true);
  // };
  return (
    <div className="hidden laptop:flex flex-row bg-[#6148FF] p-3 justify-between ">
      <div className="flex  items-center text-white ml-[5rem]">
        <img src={logo} alt=" " className="w-12 h-12" />
        <div className=" mr-20">
        <h1 className=" text-lg">RealSkills</h1>
        {/* <p className="text-white text-sm font-serif">Unleash Your Potential, Craft Real Skills</p> */}

        </div>
        <div className="flex relative">
          <input
            className="p-3 w-[25rem] flex justify-between rounded-lg text-[#6148FF]"
            placeholder="Cari Kursus terbaik...."
            onChange={(e) => setResult(e.target.value)}
            onKeyDown={enter}
          />
          <button
            onClick={searchResults}
            className=" bg-[#6148FF] absolute right-3 mt-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
      {/* <button className="rounded  text-white">Welcome {dataUser.name}!<hr/></button> */}

      <div className="mr-[5rem]">
      <React.Fragment>
          <Button className="bg-[#6148FF] flex text-bold text-md gap-3 text-white items-center" onClick={openDrawer}>
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
            Menu
          </Button>
          <Drawer open={open} onClose={closeDrawer}>
            <div className="mb-2 flex items-center justify-between p-4">
              <Typography variant="h5" color="blue-gray">
                <div className="flex  items-center gap-2">
                  <img src={logo} alt=" " className="w-12 h-12" />
                  <h1 className=" text-lg mr-20">RealSkills</h1>
                </div>
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
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
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M20.7499 10.5C20.7499 10.3358 20.7176 10.1733 20.6548 10.0216C20.592 9.86998 20.4999 9.73218 20.3838 9.61611C20.2677 9.50003 20.1299 9.40796 19.9783 9.34514C19.8266 9.28232 19.6641 9.24999 19.4999 9.24999C19.3358 9.24999 19.1732 9.28232 19.0216 9.34514C18.8699 9.40796 18.7321 9.50003 18.616 9.61611C18.5 9.73218 18.4079 9.86998 18.3451 10.0216C18.2823 10.1733 18.2499 10.3358 18.2499 10.5H20.7499ZM6.74992 10.5C6.74992 10.1685 6.61822 9.85053 6.3838 9.61611C6.14938 9.38169 5.83144 9.24999 5.49992 9.24999C5.1684 9.24999 4.85046 9.38169 4.61604 9.61611C4.38162 9.85053 4.24992 10.1685 4.24992 10.5H6.74992ZM20.6159 13.384C20.8504 13.6184 21.1684 13.7502 21.4999 13.7502C21.8315 13.7502 22.1495 13.6184 22.3839 13.384C22.6184 13.1495 22.7501 12.8316 22.7501 12.5C22.7501 12.1684 22.6184 11.8504 22.3839 11.616L20.6159 13.384ZM12.4999 3.49999L13.3839 2.61599C13.2678 2.49988 13.13 2.40778 12.9784 2.34494C12.8267 2.2821 12.6641 2.24976 12.4999 2.24976C12.3357 2.24976 12.1732 2.2821 12.0215 2.34494C11.8698 2.40778 11.732 2.49988 11.6159 2.61599L12.4999 3.49999ZM2.61592 11.616C2.38147 11.8504 2.24976 12.1684 2.24976 12.5C2.24976 12.8316 2.38147 13.1495 2.61592 13.384C2.85037 13.6184 3.16836 13.7502 3.49992 13.7502C3.83148 13.7502 4.14947 13.6184 4.38392 13.384L2.61592 11.616ZM7.49992 22.75H17.4999V20.25H7.49992V22.75ZM20.7499 19.5V10.5H18.2499V19.5H20.7499ZM6.74992 19.5V10.5H4.24992V19.5H6.74992ZM22.3839 11.616L13.3839 2.61599L11.6159 4.38399L20.6159 13.384L22.3839 11.616ZM11.6159 2.61599L2.61592 11.616L4.38392 13.384L13.3839 4.38399L11.6159 2.61599ZM17.4999 22.75C18.3619 22.75 19.1885 22.4076 19.798 21.7981C20.4075 21.1886 20.7499 20.3619 20.7499 19.5H18.2499C18.2499 19.6989 18.1709 19.8897 18.0303 20.0303C17.8896 20.171 17.6988 20.25 17.4999 20.25V22.75ZM7.49992 20.25C7.30101 20.25 7.11024 20.171 6.96959 20.0303C6.82894 19.8897 6.74992 19.6989 6.74992 19.5H4.24992C4.24992 20.3619 4.59233 21.1886 5.20182 21.7981C5.81132 22.4076 6.63797 22.75 7.49992 22.75V20.25Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                </ListItemPrefix>
               <a href="/berandaNoLog">Dashboard</a>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M20.7499 10.5C20.7499 10.3358 20.7176 10.1733 20.6548 10.0216C20.592 9.86998 20.4999 9.73218 20.3838 9.61611C20.2677 9.50003 20.1299 9.40796 19.9783 9.34514C19.8266 9.28232 19.6641 9.24999 19.4999 9.24999C19.3358 9.24999 19.1732 9.28232 19.0216 9.34514C18.8699 9.40796 18.7321 9.50003 18.616 9.61611C18.5 9.73218 18.4079 9.86998 18.3451 10.0216C18.2823 10.1733 18.2499 10.3358 18.2499 10.5H20.7499ZM6.74992 10.5C6.74992 10.1685 6.61822 9.85053 6.3838 9.61611C6.14938 9.38169 5.83144 9.24999 5.49992 9.24999C5.1684 9.24999 4.85046 9.38169 4.61604 9.61611C4.38162 9.85053 4.24992 10.1685 4.24992 10.5H6.74992ZM20.6159 13.384C20.8504 13.6184 21.1684 13.7502 21.4999 13.7502C21.8315 13.7502 22.1495 13.6184 22.3839 13.384C22.6184 13.1495 22.7501 12.8316 22.7501 12.5C22.7501 12.1684 22.6184 11.8504 22.3839 11.616L20.6159 13.384ZM12.4999 3.49999L13.3839 2.61599C13.2678 2.49988 13.13 2.40778 12.9784 2.34494C12.8267 2.2821 12.6641 2.24976 12.4999 2.24976C12.3357 2.24976 12.1732 2.2821 12.0215 2.34494C11.8698 2.40778 11.732 2.49988 11.6159 2.61599L12.4999 3.49999ZM2.61592 11.616C2.38147 11.8504 2.24976 12.1684 2.24976 12.5C2.24976 12.8316 2.38147 13.1495 2.61592 13.384C2.85037 13.6184 3.16836 13.7502 3.49992 13.7502C3.83148 13.7502 4.14947 13.6184 4.38392 13.384L2.61592 11.616ZM7.49992 22.75H17.4999V20.25H7.49992V22.75ZM20.7499 19.5V10.5H18.2499V19.5H20.7499ZM6.74992 19.5V10.5H4.24992V19.5H6.74992ZM22.3839 11.616L13.3839 2.61599L11.6159 4.38399L20.6159 13.384L22.3839 11.616ZM11.6159 2.61599L2.61592 11.616L4.38392 13.384L13.3839 4.38399L11.6159 2.61599ZM17.4999 22.75C18.3619 22.75 19.1885 22.4076 19.798 21.7981C20.4075 21.1886 20.7499 20.3619 20.7499 19.5H18.2499C18.2499 19.6989 18.1709 19.8897 18.0303 20.0303C17.8896 20.171 17.6988 20.25 17.4999 20.25V22.75ZM7.49992 20.25C7.30101 20.25 7.11024 20.171 6.96959 20.0303C6.82894 19.8897 6.74992 19.6989 6.74992 19.5H4.24992C4.24992 20.3619 4.59233 21.1886 5.20182 21.7981C5.81132 22.4076 6.63797 22.75 7.49992 22.75V20.25Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                </ListItemPrefix>
                Notifikasi
                <ListItemSuffix>
                  <Chip
                    value="5"
                    size="sm"
                    color="gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M4.16346 21.1315C3.01734 20.0245 2.10315 18.7004 1.47424 17.2363C0.845334 15.7723 0.514299 14.1976 0.500453 12.6043C0.486607 11.0109 0.790228 9.43077 1.3936 7.95601C1.99697 6.48125 2.88801 5.14143 4.01472 4.01472C5.14143 2.88801 6.48125 1.99697 7.95601 1.3936C9.43077 0.790228 11.0109 0.486607 12.6043 0.500453C14.1976 0.514299 15.7723 0.845334 17.2363 1.47424C18.7004 2.10315 20.0245 3.01734 21.1315 4.16346C23.3174 6.42668 24.5269 9.45791 24.4995 12.6043C24.4722 15.7506 23.2102 18.7604 20.9853 20.9853C18.7604 23.2102 15.7506 24.4722 12.6043 24.4995C9.45791 24.5269 6.42668 23.3174 4.16346 21.1315ZM19.4395 19.4395C21.2408 17.6381 22.2528 15.195 22.2528 12.6475C22.2528 10.1 21.2408 7.65681 19.4395 5.85546C17.6381 4.05411 15.195 3.04212 12.6475 3.04212C10.1 3.04212 7.65681 4.05411 5.85546 5.85546C4.05411 7.65681 3.04212 10.1 3.04212 12.6475C3.04212 15.195 4.05411 17.6381 5.85546 19.4395C7.65681 21.2408 10.1 22.2528 12.6475 22.2528C15.195 22.2528 17.6381 21.2408 19.4395 19.4395ZM9.04746 7.84746L18.6475 12.6475L9.04746 17.4475V7.84746Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                </ListItemPrefix>
                <a href="/kelas">Kelas</a>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M10.25 4.25H22.625V5.75H10.25V4.25ZM2.375 5C2.375 5.59334 2.55095 6.17336 2.88059 6.66671C3.21024 7.16006 3.67877 7.54458 4.22695 7.77164C4.77513 7.9987 5.37833 8.05811 5.96027 7.94236C6.54221 7.8266 7.07676 7.54088 7.49632 7.12132C7.91588 6.70176 8.2016 6.16721 8.31736 5.58527C8.43311 5.00333 8.3737 4.40013 8.14664 3.85195C7.91958 3.30377 7.53506 2.83524 7.04171 2.50559C6.54836 2.17595 5.96834 2 5.375 2C4.57962 2.00089 3.81708 2.31725 3.25467 2.87967C2.69225 3.44208 2.37589 4.20462 2.375 5ZM5.375 3.5C5.67167 3.5 5.96168 3.58797 6.20836 3.7528C6.45503 3.91762 6.64729 4.15189 6.76082 4.42597C6.87435 4.70006 6.90406 5.00166 6.84618 5.29264C6.7883 5.58361 6.64544 5.85088 6.43566 6.06066C6.22588 6.27044 5.95861 6.4133 5.66764 6.47118C5.37666 6.52906 5.07506 6.49935 4.80097 6.38582C4.52689 6.27229 4.29262 6.08003 4.1278 5.83336C3.96297 5.58668 3.875 5.29667 3.875 5C3.87545 4.60231 4.03363 4.22104 4.31483 3.93983C4.59604 3.65863 4.97731 3.50045 5.375 3.5ZM10.25 11.75H22.625V13.25H10.25V11.75ZM5.375 15.5C5.96834 15.5 6.54836 15.3241 7.04171 14.9944C7.53506 14.6648 7.91958 14.1962 8.14664 13.6481C8.3737 13.0999 8.43311 12.4967 8.31736 11.9147C8.2016 11.3328 7.91588 10.7982 7.49632 10.3787C7.07676 9.95912 6.54221 9.6734 5.96027 9.55764C5.37833 9.44189 4.77513 9.5013 4.22695 9.72836C3.67877 9.95542 3.21024 10.3399 2.88059 10.8333C2.55095 11.3266 2.375 11.9067 2.375 12.5C2.37589 13.2954 2.69225 14.0579 3.25467 14.6203C3.81708 15.1827 4.57962 15.4991 5.375 15.5ZM5.375 11C5.67167 11 5.96168 11.088 6.20836 11.2528C6.45503 11.4176 6.64729 11.6519 6.76082 11.926C6.87435 12.2001 6.90406 12.5017 6.84618 12.7926C6.7883 13.0836 6.64544 13.3509 6.43566 13.5607C6.22588 13.7704 5.95861 13.9133 5.66764 13.9712C5.37666 14.0291 5.07506 13.9994 4.80097 13.8858C4.52689 13.7723 4.29262 13.58 4.1278 13.3334C3.96297 13.0867 3.875 12.7967 3.875 12.5C3.87545 12.1023 4.03363 11.721 4.31483 11.4398C4.59604 11.1586 4.97731 11.0004 5.375 11ZM10.25 19.25H22.625V20.75H10.25V19.25ZM5.375 23C5.96834 23 6.54836 22.8241 7.04171 22.4944C7.53506 22.1648 7.91958 21.6962 8.14664 21.1481C8.3737 20.5999 8.43311 19.9967 8.31736 19.4147C8.2016 18.8328 7.91588 18.2982 7.49632 17.8787C7.07676 17.4591 6.54221 17.1734 5.96027 17.0576C5.37833 16.9419 4.77513 17.0013 4.22695 17.2284C3.67877 17.4554 3.21024 17.8399 2.88059 18.3333C2.55095 18.8266 2.375 19.4067 2.375 20C2.37589 20.7954 2.69225 21.5579 3.25467 22.1203C3.81708 22.6828 4.57962 22.9991 5.375 23ZM5.375 18.5C5.67167 18.5 5.96168 18.588 6.20836 18.7528C6.45503 18.9176 6.64729 19.1519 6.76082 19.426C6.87435 19.7001 6.90406 20.0017 6.84618 20.2926C6.7883 20.5836 6.64544 20.8509 6.43566 21.0607C6.22588 21.2704 5.95861 21.4133 5.66764 21.4712C5.37666 21.5291 5.07506 21.4994 4.80097 21.3858C4.52689 21.2723 4.29262 21.08 4.1278 20.8334C3.96297 20.5867 3.875 20.2967 3.875 20C3.87545 19.6023 4.03363 19.221 4.31483 18.9398C4.59604 18.6586 4.97731 18.5004 5.375 18.5Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                </ListItemPrefix>
                <a href="/topik">Kursus</a>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M12.5 4.5C11.5717 4.5 10.6815 4.86875 10.0251 5.52513C9.36875 6.1815 9 7.07174 9 8C9 8.92826 9.36875 9.8185 10.0251 10.4749C10.6815 11.1313 11.5717 11.5 12.5 11.5C13.4283 11.5 14.3185 11.1313 14.9749 10.4749C15.6313 9.8185 16 8.92826 16 8C16 7.07174 15.6313 6.1815 14.9749 5.52513C14.3185 4.86875 13.4283 4.5 12.5 4.5ZM7 8C7 6.54131 7.57946 5.14236 8.61091 4.11091C9.64236 3.07946 11.0413 2.5 12.5 2.5C13.9587 2.5 15.3576 3.07946 16.3891 4.11091C17.4205 5.14236 18 6.54131 18 8C18 9.45869 17.4205 10.8576 16.3891 11.8891C15.3576 12.9205 13.9587 13.5 12.5 13.5C11.0413 13.5 9.64236 12.9205 8.61091 11.8891C7.57946 10.8576 7 9.45869 7 8ZM3.5 19.5C3.5 18.1739 4.02678 16.9021 4.96447 15.9645C5.90215 15.0268 7.17392 14.5 8.5 14.5H16.5C17.8261 14.5 19.0979 15.0268 20.0355 15.9645C20.9732 16.9021 21.5 18.1739 21.5 19.5V22.5H3.5V19.5ZM8.5 16.5C7.70435 16.5 6.94129 16.8161 6.37868 17.3787C5.81607 17.9413 5.5 18.7044 5.5 19.5V20.5H19.5V19.5C19.5 18.7044 19.1839 17.9413 18.6213 17.3787C18.0587 16.8161 17.2956 16.5 16.5 16.5H8.5Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                </ListItemPrefix>
                Akun
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      </div>

    </div>
  );
};
