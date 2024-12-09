"use client";
import { useState ,useEffect} from "react";

// const peopleData = [
//   {
//     name: "Lindsay Walton",
//     title: "Front-end Developer",
//     email: "lindsay.walton@example.com",
//   },
//   {
//     name: "John Doe",
//     title: "Back-end Developer",
//     email: "john.doe@example.com",
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OtherUsers({data,onDelete}) {
  const [people, setPeople] = useState(data);
  useEffect(()=>{
    setPeople(data)
  },[data]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users other than Tourist in your account including their name, title,
            and email.
          </p>
        </div>
      </div>

      <div className="mt-8 flow-root">
        {people.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-sm">No users found.</p>
          </div>
        ) : (
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
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Actions</span>
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
                        {person.fullName}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                        )}
                      >
                        {person.role}
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
                          "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                        )}
                      >
                        <button
                          onClick={() => onDelete(person.userId)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete<span className="sr-only">, {person.name}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
