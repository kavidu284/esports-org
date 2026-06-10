import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function RegistrationDetails() {
  const { id } = useParams();

  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await api.get(
          `/registrations/${id}`
        );

        setRegistration(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRegistration();
  }, [id]);

  if (!registration) {
    return <div>Loading...</div>;
  }

const approveTeam = async () => {
  try {
    await api.put(
      `/registrations/${id}/approve`
    );

    alert("Team Approved");

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

const rejectTeam = async () => {
  try {
    await api.put(
      `/registrations/${id}/reject`
    );

    alert("Team Rejected");

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Team Details
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl">

        <h2 className="text-3xl font-bold mb-4">
          {registration.team_name}
        </h2>

        <p>Captain: {registration.captain_name}</p>
        <p>Email: {registration.captain_email}</p>
        <p>Phone: {registration.captain_phone}</p>

        <p className="mt-4">
          Status: {registration.status}
        </p>

        <div className="flex gap-4 mt-6">

        <button
            onClick={approveTeam}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
        >
            Approve
        </button>

        <button
            onClick={rejectTeam}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
            Reject
        </button>

        </div>


      </div>
    </div>
  );
}