// import { useState } from "react";

// import 'react-toastify/dist/ReactToastify.css';
// import propTypes from 'prop-types';
// import { SearchbarHeader, SearchForm, SearchButton, SearchInput } from 'components/Searchbar/Searchbar.styled';

// export function Searchbar({onSubmit, handleQueryChange, handleSubmit}) {
//     const [searchQuery, setSearchQuery] = useState(''); 

// return (
//             <SearchbarHeader>
//                 <SearchForm onSubmit={handleSubmit}>
//                     <SearchInput
//                         type="text"
//                         name='searchQuery'
//                         value={searchQuery}
//                         autocomplete="off"
//                         placeholder="Search movies"
//                         onChange={handleQueryChange}
//                      />
            
//                      <SearchButton type="submit"> Search</SearchButton>
            
//                 </SearchForm>
//             </SearchbarHeader>
            
//         );
// };
// Searchbar.propTypes = {
//     onSubmit: propTypes.func.isRequired,
// }