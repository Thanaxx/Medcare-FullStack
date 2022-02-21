import React, {useState} from 'react';
import { doctorname } from './doctors';
import Doctorspage from './Doctorspage';
import {SearchContainer, SearchBox, DoctorsContainer} from './SpecialistStyle';

function Specialist() {

    const [searchDoc, setSearchDoc] = useState("")

    return (
        <>
            <SearchContainer>
                <SearchBox>
                    <input 
                        type="search" 
                        name="search" 
                        placeholder="Ex. Specialist, Name, Doctor"
                        onChange={(event) => {
                            setSearchDoc(event.target.value)
                        }}
                    />
                    <button>Find</button>
                </SearchBox>
            </SearchContainer>

            <DoctorsContainer>
                {doctorname.filter((doc)=> {
                    if (searchDoc === ""){
                        return doc
                    } else if (doc.names.toLocaleLowerCase().includes(searchDoc.toLocaleLowerCase())){
                        return doc
                    }
                }).map((doc, index) => {
                    return(
                        <>
                            <Doctorspage
                                key={doc.id}
                                image={doc.image}
                                name={doc.names}
                                label={doc.label}
                                specialty={doc.specialty}
                                rate={doc.rate}
                                clinic={doc.clinic}
                                path={doc.path}
                                hospital={doc.hospital}
                                address={doc.address}
                                sched={doc.schedule}
                                professionalFee={doc.professionalFee}
                                medCert={doc.medCert}
                                medClearance={doc.medClearance}
                                medAbstract={doc.medAbstract}
                            />
                        </>
                    )
                })}
            </DoctorsContainer>

            <Doctorspage  />
        </>
        
    )
}

export default Specialist;
