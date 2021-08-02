import axios from "axios"
export class CandidateService{
getCandidates(){
    return axios.get("http://localhost:8080/api/candidates/getall")
}
} 