// import React from 'react'
// import { useState } from 'react';
// import css from './HeaderSearchBar.module.css'
// import { ToastContainer, toast } from 'react-toastify';
// const HeaderSearchBar = ({ getWeatherData}) => {

//   const [city, setCity] = useState('');


//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (city === '') {
//       toast.error(
//         'search string is empty!', {
//           position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       }
//       );
//       return;
//     }
    

//     getWeatherData({city});

//     toast.success(' Here is information! Use it wisely =)', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });

//     reset();
//   };

//   const reset = () => {
//     setCity('');
//   }




//   return (
//     <>
//     <header className={css.searchbar}>
//         <form
//           className={css.searchForm}
//           onSubmit={handleSubmit}
//         >
//           <button type="submit"
//             className={css.searchbutton}
//           >
//             <span className="searchForm-button-label">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 20 20"
//               >
//                 <title>search</title>
//                 <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
//               </svg>
//             </span>
//           </button>

//           <input
//             className={css.searchinput}
//             type="text"
//             name='city'
//             onChange={handleCityChange}
//             autoComplete="off"
//             value={city}
//             autoFocus
//             placeholder="Search City"
//           />
//         </form>
//       </header>
//       <ToastContainer  />
//     </>
//   )
// }

// export default HeaderSearchBar