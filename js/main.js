let addStudentBtn = document.getElementById("add-student-btn");
let outerMadal = document.getElementById("outer-modal");
let innerModal = document.getElementById("inner-modal");
let students = JSON.parse(localStorage.getItem("students") || "[]");
localStorage.setItem("students" , JSON.stringify(students))
let tbody = document.getElementById("tbody");

addStudentBtn.addEventListener("click", function () {
  outerMadal.classList.remove("hidden");
});

outerMadal.addEventListener("click", function () {
  outerMadal.classList.add("hidden");
});

innerModal.addEventListener("click", function (e) {
  e.stopPropagation();
});

innerModal.addEventListener("submit", function (e) {
  e.preventDefault();
  let studentObj = {};
  studentObj.IsmingizNima = e.target[0].valyu;
  studentObj.FamilyangizNima = e.target[1].valyu;
  studentObj.Manzlingiz = e.target[2].valyu;
  studentObj.TugilgnKuningiz = e.target[3].valyu;
  studentObj.lavozim = e.target[4].valyu;
  studentObj.LavozimTuri = e.target[5].valyu;
  studentObj.Maosh = e.target[6].valyu;
  studentObj.uylanganm = e.target[7].checked;
  studentObj.id = students.length + 1;
  students.push(studentObj);
  showStudents(tbody, students);
  outerMadal.classList.add("hidden");
});

function showStudents(content, data) {
    content.innerHTML = " ";
  data.map((el , index) => {
    content.innerHTML += `
        <tr class="odd:bg-white  ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                        ${index + 1}
                    </th>
                    <td class="px-6 py-4">
                        ${el.IsmingizNima}
                    </td>
                    <td class="px-6 py-4">
                        ${el.FamilyangizNima}
                    </td>
                    <td>
                       ${el.Manzlingiz}
                    </td>
                    <td class="px-6 py-4">
                        ${el.TugilgnKuningiz}
                    </td>
                    <td class="px-6 py-4">
                        ${el.lavozim}
                    </td>
                    <td class="px-6 py-4">
                        ${el.LavozimTuri}
                    </td>
                    <td class="px-6 py-4">
                        "$${el.Maosh}"
                    </td>
                    <td class="px-6 py-4">
                        ${el.uylanganm ? "Ha" : "Yoq"}
                    </td>
                    <td class="px-4 py-4 flex  gap-[10px]">
                        <button class="bg-[red] max-w-[60px] w-full h-[45px] rounded-md cursor-pointer  ">Edit</button>
                        <button
                            class="bg-[blue] max-w-[60px] w-full h-[45px] rounded-md cursor-pointer  ">Delit</button>
                    </td>
                </tr>
        `;
  });
}
showStudents(tbody, students);
