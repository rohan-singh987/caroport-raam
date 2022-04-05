import React from "react";

function patientprofile() {
  return (
    <>
      <div className="bg-gray-500">
        <div className="general py-2">
        <h2 className="mx-3" >General Information</h2>
        <div className="relative overflow-x-auto shadow-md rounded-lg md:rounded-lg my-2 mx-9">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Name
                </th>
                <td className="px-6 py-4">Mohit</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Age
                </th>
                <td className="px-6 py-4">19</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Gender
                </th>
                <td className="px-6 py-4">Male</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Phone Number
                </th>
                <td className="px-6 py-4">9817764473</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Aadhar number
                </th>
                <td className="px-6 py-4">65464986548946</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="medical py-2">
          <h2 className="mx-3">Medical History</h2>

          <div className="relative overflow-x-auto shadow-md rounded-lg md:rounded-lg my-3 mx-9">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Disease Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Treated by
                  </th>
                  <th scope="col" className="px-6 py-3">
                    First Check Up
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Check Up
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                </th>
                  <th scope="col" className="px-6 py-3">
                    
                </th>

                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Cough Cold
                  </th>
                  <td className="px-6 py-4">xyz</td>
                  <td className="px-6 py-4">04/04/2022</td>
                  <td className="px-6 py-4">05/04/2022</td>
                  <td className="px-6 py-4">Treated Successfully</td>
                  

                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
        
      </div>
    </>
  );
}

export default patientprofile;