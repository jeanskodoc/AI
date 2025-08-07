
<script>
    // Fonction de vérification des identifiants enseignant
    function checkTeacherCredentials(username, password) {
        const teacher = SchoolDB.teachers.find(teacher => 
            teacher.username === username && 
            teacher.password === password
        );
        
        if (teacher) {
            return {
                id: teacher.id,
                name: `${teacher.firstName} ${teacher.lastName}`,
                subject: teacher.subjects[0], // Premier sujet comme matière principale
                class: teacher.classes[0], // Première classe comme classe principale
                role: 'teacher'
            };
        }
        return null;
    }

    // Gestion de la connexion
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const teacher = checkTeacherCredentials(username, password);
        
        if (teacher) {
            // Stocker la session
            sessionStorage.setItem('currentUser', JSON.stringify(teacher));
            showMainForm(teacher);
        } else {
            showError("Identifiant ou mot de passe incorrect");
        }
    });

    // Vérifier la session au chargement
    function checkSession() {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user && user.role === 'teacher') {
            showMainForm(user);
        }
    }

    // Déconnexion
    function logout() {
        sessionStorage.removeItem('currentUser');
        showLoginSection();
    }

    document.addEventListener('DOMContentLoaded', function() {
        checkSession();
    });
</script>