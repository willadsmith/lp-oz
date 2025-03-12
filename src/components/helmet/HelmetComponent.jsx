import {Helmet} from "react-helmet";

const HelmetComponent = ({title}) => {
    return (
        <Helmet>
            Ольга Забалуева - {title}
        </Helmet>
    );
}

export default HelmetComponent;