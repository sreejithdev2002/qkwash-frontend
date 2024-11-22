import { faBarsStaggered, faFile, faHouse, faUser, faUsers, faArrowRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeIcon = () => {
    return <FontAwesomeIcon icon={faHouse} />
};

const BarsIcon = () => {
    return <FontAwesomeIcon icon={faBarsStaggered} />;
};

const FileIcon = () => {
    return <FontAwesomeIcon icon={faFile} />;
};

const UsersIcon = () => {
    return <FontAwesomeIcon icon={faUsers} />;
};

const UserIcon = () => {
    return <FontAwesomeIcon icon={faUser} />
};

const LogoutIcon = () => {
    return <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "white" }}/>
};

const SearchIcon = () => {
    return <FontAwesomeIcon icon={faMagnifyingGlass} />
};

export { HomeIcon, BarsIcon, FileIcon, UsersIcon, UserIcon, LogoutIcon, SearchIcon };