import React from 'react';

const ContentTest = () => {
    return (
        <div className="container my-2">
            <div className="card">
                <div className="card-body">
                    <div th:switch="${students}" className="container my-5">
                        <p className="my-5">
                            <a href="/students/showForm" className="btn btn-primary"><i
                                className="fas fa-user-plus ml-2"> Add Student</i></a>
                        </p>
                        <div className="col-md-10">
                            <h2 th:case="null">No Students yet!</h2>
                            <div th:case="*">
                                <table className="table table-striped table-responsive-md">
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
                                        <tr th:each="student : ${students}">
                                            <td th:text="${student.id}"></td>
                                            <td th:text="${student.name}"></td>
                                            <td th:text="${student.email}"></td>
                                            <td th:text="${student.phoneNo}"></td>
                                            <td><a th:href="@{/students/edit/{id}(id=${student.id})}" className="btn btn-primary"><i className="fas fa-user-edit ml-2"></i></a></td>
                                            <td><a th:href="@{/students/delete/{id}(id=${student.id})}" className="btn btn-primary"><i className="fas fa-user-times ml-2"></i></a></td>
                                        </tr>
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
export default ContentTest

