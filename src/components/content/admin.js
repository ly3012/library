import React from 'react';

const Admin = () => {
    return (
        <div class="container my-2">
            <div class="card">
                <div class="card-body">
                    {/* <div th:switch="${students}" class="container my-5"> */}
                    <div  class="container my-5">

                        <p class="my-5">
                            <a href="/students/showForm" class="btn btn-primary"><i
                                class="fas fa-user-plus ml-2"> Add Student</i></a>
                        </p>
                        <div class="col-md-10">
                            <h2>No Students yet!</h2>
                            <div>
                                <table class="table table-striped table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th>Id:</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr th:each="student : ${students}">
                                            <td th:text="${student.id}"></td>
                                            <td th:text="${student.name}"></td>
                                            <td th:text="${student.email}"></td>
                                            <td th:text="${student.phoneNo}"></td>
                                            <td><a th:href="@{/students/edit/{id}(id=${student.id})}" class="btn btn-primary"><i class="fas fa-user-edit ml-2"></i></a></td>
                                            <td><a th:href="@{/students/delete/{id}(id=${student.id})}" class="btn btn-primary"><i class="fas fa-user-times ml-2"></i></a></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
export default Admin

