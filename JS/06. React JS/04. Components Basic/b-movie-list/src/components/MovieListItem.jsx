export default function MovieListItem(props) {
    return (
        <li style={{ color: 'pink' }}>
            <a href={props.url || '#'} target="_blank">
                {props.children}
            </a>
        </li>
    );
}
