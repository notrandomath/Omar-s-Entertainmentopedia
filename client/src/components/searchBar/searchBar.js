import "./searchBar.scss";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

const SearchBar = ({ field, value, ...props }) => {
  return (
    <div className="searchBar">
      <TextField
        label="Search"
        {...field}
        {...props}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <Search className="searchIcon"/>
              </IconButton>
            </InputAdornment>
          ),
          disableUnderline: true,
          className: "input",
        }}
        InputLabelProps={{
          className: "label",
        }}
      />
    </div>
  );
};

export default SearchBar;
