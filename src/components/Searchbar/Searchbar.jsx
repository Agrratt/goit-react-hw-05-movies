import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import propTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchButton, SearchInput } from 'components/Searchbar/Searchbar.styled';

export function Searchbar({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleQueryChange = evt => setSearchQuery( evt.target.value.toLowerCase());

    const handleSubmit = evt => {
        evt.preventDefault();

        if (searchQuery.trim() === '') {
            toast.error('Please, enter something');
            return;
        };

        onSubmit(searchQuery);
        setSearchQuery('');
    };

return (
            <SearchbarHeader>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput
                        type="text"
                        name='searchQuery'
                        value={searchQuery}
                        autocomplete="off"
                        placeholder="Search movies"
                        onChange={handleQueryChange}
                     />
            
                     <SearchButton type="submit"> Search</SearchButton>
            
                </SearchForm>
            </SearchbarHeader>
            
        );
};
Searchbar.propTypes = {
    onSubmit: propTypes.func.isRequired,
}