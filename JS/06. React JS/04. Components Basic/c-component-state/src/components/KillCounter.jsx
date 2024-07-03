export default function KillCounter(props) {
    let title = 'Kill Counter';

    // Conditional rendering with if statements
    if (props.count == 1) {
        return <h3>First Blood!</h3>;
    }

    if (props.count == 2) {
        title = 'Double Kill!';
    }

    if (props.count > 9) {
        title = 'GodLike';
    } else if (props.count > 5) {
        title = 'Unstoppable!';
    } else if (props.count > 3) {
        title = 'Multi Kill!';
    }
    
    return (
        <>
            {props.count == 3
                ? <h3>Tripple Kill!</h3>
                : <h3>{title}</h3>
            }
        </>
    );
}
