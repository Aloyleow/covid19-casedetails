import { useParams, useNavigate, Link} from "react-router-dom"
import { motion } from "framer-motion"

export default function CaseTrackerDetailsPage({covidData}){

    const navigate = useNavigate()
    const { _id } = useParams()
    const patientDetails = covidData.find((patient) => patient._id === Number(_id))
    
    const handleBackToTracker = () => {navigate("/casetracker")}
    
       
    if(!patientDetails) return <><h1>No matching ID</h1><button onClick={handleBackToTracker}>Back to List</button></>
    
    return (<>
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0 }}
        transition= {{duration: 0.5}}
        >
            <article className="articleTrackerPage">
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
                    <dt>Confirmation Date</dt>
                    <dd>{patientDetails?.date_of_confirmation}</dd>
                    <br></br>
                    <dt>Discharge Date</dt>
                    <dd>{patientDetails?.date_of_discharge}</dd>
                    <br></br>
                    <dt>Place Visited</dt>
                    <dd>{patientDetails?.places_visited}</dd>
                    <br></br>
                    <dt>Residing Location</dt>
                    <dd>{patientDetails?.residing_location}</dd>
                    <dd>{patientDetails?.residing_postal_code}</dd>
                    <br></br>
                    <dt><Link to={patientDetails?.reference_url} target="_blank">Reference URL</Link></dt>
                    <dd></dd>
                </dl>
            </article>
            <div className="divCaseTracker">
                <button className="butCaseDetailsTracker" onClick={handleBackToTracker}>Back to Case Tracker</button>
            </div>
        </motion.div>

    </>)
}
