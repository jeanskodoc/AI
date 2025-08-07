// Dans enseignant.htm
function checkCredentials(username, password) {
    return SchoolDB.teachers.find(teacher => 
        teacher.username === username && teacher.password === password
    );
}

// Dans parents.htm
function checkCredentials(username, password) {
    return SchoolDB.parents.find(parent => 
        (parent.email === username || parent.phone === username) && 
        parent.password === password
    );
}