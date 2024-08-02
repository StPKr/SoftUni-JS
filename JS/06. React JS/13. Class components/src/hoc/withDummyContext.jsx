
import { DummyContext } from "../contexts/DummyContext";

export const withDummyContext = (Component) => {
    const DummyComponent = (props) => {
        return (
            <DummyContext.Consumer>
                {(contextData) => (
                    <Component {...props} dummy={contextData} />
                )}
            </DummyContext.Consumer>
        )
    }

    return DummyComponent;
}
