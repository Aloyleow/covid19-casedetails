import { useParams, useNavigate, Link} from "react-router-dom"
import { createData } from "../Services/createData";
import { motion } from "framer-motion";

export default function CaseDetailsPage({covidData}){
    const navigate = useNavigate()
    const { _id } = useParams()
    const patientDetails = covidData.find((patient) => patient._id === Number(_id))

    const saveCases = {
        case_id: patientDetails?._id,
        age: patientDetails?.age,
        nationality: patientDetails?.nationality,
        imported_local: patientDetails?.imported_local,
        public_healthcare_institution: patientDetails?.public_healthcare_institution,
        residing_location: patientDetails?.residing_location
    }
    
    const handleBackToList = () => {navigate("/list")}
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await createData(saveCases);
          
    }
    
    if(!patientDetails) return <><h1>No matching ID</h1><button onClick={handleBackToList}>Back to List</button></>
    
    return (<>
        <motion.div
        initial={{ opacity: 0, x: 100}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition= {{duration: 0.5}}
        >
            <article className="articleCaseDetails">
                <dl>
                    <h3><u>{patientDetails?.case_id}</u></h3>
                    <dt>Age</dt>
                    <dd>{patientDetails?.age}</dd>
                    <br></br>
                    <dt>Gender</dt>
                    <dd>{patientDetails?.gender}</dd>
                    <br></br>
                    <dt>Nationality</dt>
                    <dd>{patientDetails?.nationality}</dd>
                    <br></br>
                    <dt>Imported Or Local Transmission</dt>
                    <dd>{patientDetails?.imported_local}</dd>
                    <br></br>
                    <dt>Country Transmitted From</dt>
                    <dd>{patientDetails?.place}</dd>
                    <br></br>
                    <dt>Hospitalised Location</dt>
                    <dd>{patientDetails?.public_healthcare_institution}</dd>
                    <br></br>
                    <dt>Status</dt>
                    <dd>{patientDetails?.status}</dd>
                    <br></br>
                    <dt>Confirmation Date (m/dd/yyyy)</dt>
                    <dd>{patientDetails?.date_of_confirmation}</dd>
                    <br></br>
                    <dt>Discharge Date (m/dd/yyyy)</dt>
                    <dd>{patientDetails?.date_of_discharge}</dd>
                    <br></br>
                    <dt>Place Visited</dt>
                    <dd>{patientDetails?.places_visited}</dd>
                    <br></br>
                    <dt>Residing Location</dt>
                    <dd>{patientDetails?.residing_location}</dd>
                    <dd>{patientDetails?.residing_postal_code}</dd>
                    <br></br>
                    <dt><Link to={patientDetails?.reference_url} target="_blank" className="contrast">Reference URL</Link></dt>
                    <dd>Ensure link is always to </dd>
                </dl>
            </article>
            <div className="divCaseDetails">
                <button className="butCaseDetails" onClick={handleBackToList}>Back to List</button>
                <button className="butCaseDetails" onClick={handleSubmit}>Save to tracker</button>
            </div>
        </motion.div>
    </>)
}

//need to find out why need to put question mark again. isit because of async issues ?