"use client";
import { useState } from "react";

const peopleData = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    status: "Pending",
  },
  {
    name: "John Doe",
    title: "Back-end Developer",
    email: "john.doe@example.com",
    status: "Pending",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OtherUserTable() {
  const [people, setPeople] = useState(peopleData);

  const handleStatusChange = (email, newStatus) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.email === email ? { ...person, status: newStatus } : person
      )
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email, and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email}>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      {person.title}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {person.status}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <button
                        onClick={() =>
                          handleStatusChange(person.email, "Accepted")
                        }
                        className="mr-4 text-green-600 hover:text-green-900"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(person.email, "Rejected")
                        }
                        className="text-red-600 hover:text-red-900"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
