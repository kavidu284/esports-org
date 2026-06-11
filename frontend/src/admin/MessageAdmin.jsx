
import { useEffect, useState } from "react";
import api from "../services/api";

export default function MessagesAdmin() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await api.get("/messages");
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const response = await api.get("/messages");
        if (isMounted) setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/messages/${id}`);

      alert("Message Deleted");

      fetchMessages();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Contact Messages
      </h1>

      <div className="space-y-4">

        {messages.map((message) => (

          <div
            key={message.id}
            className="bg-zinc-900 p-6 rounded-xl"
          >

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-xl font-bold">
                  {message.subject}
                </h2>

                <p className="text-gray-400">
                  {message.name}
                </p>

                <p className="text-gray-400">
                  {message.email}
                </p>

                <p className="mt-4">
                  {message.message}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  {message.created_at}
                </p>

              </div>

              <button
                onClick={() =>
                  deleteMessage(message.id)
                }
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
