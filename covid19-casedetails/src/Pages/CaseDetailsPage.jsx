import { useParams } from "react-router-dom"


export default function CaseDetailsPage({covidData}){

    const { _id } = useParams()
    const patientDetails = covidData.find((patient) => patient._id === Number(_id))
    console.log(patientDetails)
    
    return (<>

        <h1>{patientDetails?.case_id}</h1>

        <dl>
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
            <dt>Reference URL</dt>
            <dd>{patientDetails?.reference_url}.</dd>

        </dl>

    
    </>)
}

//need to find out why need to put question mark again. isit because of async issues ?