import './navlink.css';

function NavLink(props) {
    return (
        <div>
            <li>{props.text}</li>
        </div>
    );
}

export default NavLink;