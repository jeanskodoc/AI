
<script>
    // Fonction de vérification des identifiants parent
    function checkParentCredentials(username, password) {
        const parent = SchoolDB.parents.find(parent => 
            (parent.email === username || parent.phone === username) && 
            parent.password === password
        );
        
        if (parent) {
            // Récupérer les infos des élèves associés
            const students = parent.students.map(id => {
                const student = SchoolDB.getStudentById(id);
                return student ? `${student.firstName} ${student.lastName}` : '';
            }).filter(name => name);
            
            return {
                id: parent.id,
                name: `${parent.firstName} ${parent.lastName}`,
                students: students,
                role: 'parent'
            };
        }
        return null;
    }

    // Gestion de la connexion
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const parent = checkParentCredentials(username, password);
        
        if (parent) {
            // Stocker la session
            sessionStorage.setItem('currentUser', JSON.stringify(parent));
            showMainContent(parent);
        } else {
            showError("Email/numéro ou mot de passe incorrect");
        }
    });

    // Inscription des parents
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation des données
        if (document.getElementById('register-password').value !== 
            document.getElementById('confirm-password').value) {
            showRegisterError("Les mots de passe ne correspondent pas");
            return;
        }
        
        // Création du compte parent
        const newParent = {
            id: SchoolDB.parents.length + 1,
            firstName: document.getElementById('parent-name').value.split(' ')[0],
            lastName: document.getElementById('parent-name').value.split(' ')[1] || '',
            email: document.getElementById('parent-email').value,
            phone: document.getElementById('parent-phone').value,
            password: document.getElementById('register-password').value,
            students: [], // À associer après vérification
            username: document.getElementById('parent-email').value
        };
        
        // Vérification de l'élève
        const studentName = document.getElementById('student-name').value;
        const studentClass = document.getElementById('student-class').value;
        
        const student = SchoolDB.students.find(s => 
            `${s.firstName} ${s.lastName}`.toLowerCase() === studentName.toLowerCase() && 
            s.class === studentClass
        );
        
        if (!student) {
            showRegisterError("Aucun élève trouvé avec ces informations");
            return;
        }
        
        newParent.students = [student.id];
        SchoolDB.parents.push(newParent);
        
        showRegisterSuccess("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
        setTimeout(() => showLoginSection(), 3000);
    });

    // Vérification de session
    function checkSession() {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user && user.role === 'parent') {
            showMainContent(user);
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