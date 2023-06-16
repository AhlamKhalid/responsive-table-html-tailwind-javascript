// DOM elements //
// table body
const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search-input");

// get users through dummyJSON API
const getUsers = () => {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
      const users = data.users;
      displayUsers(users);
    });
};

// insert users in DOM
const displayUsers = (users) => {
  // reset table data
  tableBody.innerHTML = "";

  // if no search results
  showNoResults(users);

  // users HTML
  users.forEach((user, index) => {
    tableBody.innerHTML += `
        <!-- don't add border bottom for last row -->
        <tr class="${
          index !== users.length - 1 ? "border-b border-gray-900" : ""
        }">
            <td
              class="flex items-center gap-3 ps-7 pe-12 py-5 whitespace-nowrap"
            >
              <img
                src=${user.image}
                class="w-11 h-11 rounded-full object-cover shrink-0 bg-slate-900"
              />
              <div>
                <p class="text-white text-sm capitalize">${user.firstName} ${
      user.lastName
    }</p>
                <p class="text-gray-500 mt-1 text-sm">${user.email}</p>
              </div>
            </td>
            <td
              class="px-7 py-5 text-white capitalize text-sm whitespace-nowrap"
            >
              ${user.company.title}
            </td>
            <td
              class="px-7 py-5 text-white capitalize text-sm whitespace-nowrap"
            >
              ${user.company.department}
            </td>
            <td class="px-7 py-5 whitespace-nowrap">
              <span class="flex items-center gap-2">
                <!-- display different circle depending on gender -->
                <span
                  class="w-3.5 h-3.5 rounded-full inline-block ring-4 ring-inset ${
                    user.gender === "male"
                      ? "bg-blue-400 ring-blue-950"
                      : "bg-green-400 ring-green-950"
                  }"
                ></span>
                <span class="text-sm text-white capitalize">${
                  user.gender
                }</span>
              </span>
            </td>
            <td class="px-7 py-5 whitespace-nowrap">
              <div class="flex items-center justify-end gap-4">
                <button
                  class="text-sm text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  Update
                </button>
                <button
                  class="text-sm text-red-400 hover:text-red-300 font-semibold"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        `;
  });
};

// show no results message
const showNoResults = (users) => {
  if (users.length === 0) {
    tableBody.innerHTML += `<tr>
                              <td colspan="5" class="px-7 py-5 text-gray-500 text-sm">
                                No results
                              </td>
                            </tr>
                            `;
  }
};

// event handler for search
const searchHandler = (event) => {
  const eventTarget = event.target;
  const searchTerm = eventTarget.value;

  fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      const users = data.users;
      displayUsers(users);
    });
};

// start with getting users
getUsers();

// add event listener for search input
searchInput.addEventListener("input", searchHandler);
