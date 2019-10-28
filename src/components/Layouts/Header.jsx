import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ReactComponent as LogoYoutube } from './img/youtube.svg'
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchBar from './SearchBar';
import Spinner from '../Spinner'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menu: {
    backgroundColor: "#121212",
  },
  menuItem: {
    backgroundColor: "#121212",
    color: "white",
    '&:hover': {
      backgroundColor: "#121212",      
    }
  },
  title: {
    display: 'none',
    maxWidth:"80%",
    maxHeight:"80%",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      maxWidth:"80%",
      maxHeight:"80%",
      },
  },
  search: {
    borderRadius: '2',
    backgroundColor: "#121212",
    border: "1.5px solid #212121",
    '&:hover': {
      border: "1.5px solid #1C62B9"
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    cursor:'pointer',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    margin: 'auto'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '50vw',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
      margin: 'auto'
    },
  },
  button: {
    backgroundColor: "#121212"
  },
  sectionDesktop: {
      display: 'flex',
  },
}));

function Header({loading, loading2, history}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{margin: '0'}}
>
      <MenuItem onClick={handleMenuClose}  className={classes.menuItem} >Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}  className={classes.menuItem} >My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {loading && <Spinner/>}
      <AppBar position="sticky" style={{ background: '#272727' }} >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div onClick={()=>history.push('/results?search_query=')}>
          <LogoYoutube className={classes.title} />
          </div>
          {/*<span>
            JA
          </span>*/}
          <SearchBar classes={classes}/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton aria-label="upload videos" color="inherit">
              <Badge color="secondary">
                <VideoCallIcon />
              </Badge>
            </IconButton>

            <IconButton aria-label="show google app" color="inherit">
              <Badge color="secondary">
                <AppsIcon />
              </Badge>
            </IconButton>
            
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.Videos.loadingVideos,
  loading2: state.Videos.loadingVideo
});

export default withRouter(connect(mapStateToProps)(Header));
