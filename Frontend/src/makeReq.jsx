import axios from "axios";

export const makeReq = axios.create({
  baseURL: "https://lasienne-backend.onrender.com/api",
  headers: {
    Authorization: "bearer " + "bdfc163b99c2ba41da5f455c4e1085bf40566e395a57a8988f324a4fedcfd1b7a931b9812b2d32b9806a378860cacb33bb6357246e82dbc059ad98236ac2c5c85cbaf0ea18fbe4b8cba103339b7e08d2968d466821f59cd570567d0dc625a9e4ec96020b24f37e3d12d29ec3b4de4201d95d46208a616b0c98486c82771075c9",
  },
});
