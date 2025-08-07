// Remplacer le script existant par :
<script>
    // Fonction de vérification des identifiants admin
    function checkAdminCredentials(username, password) {
        // Vérifier les admins (enseignants avec isAdmin=true)
        const admin = SchoolDB.teachers.find(teacher => 
            teacher.username === username && 
            teacher.password === password && 
            teacher.isAdmin
        );
        
        if (admin) {
            return {
                id: admin.id,
                name: `${admin.firstName} ${admin.lastName}`,
                role: 'admin'
            };
        }
        return null;
    }

    // Gestion de la soumission du formulaire
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const admin = checkAdminCredentials(username, password);
        
        if (admin) {
            // Stocker la session
            sessionStorage.setItem('currentUser', JSON.stringify(admin));
            showMainContent();
        } else {
            showError("Identifiants incorrects ou droits insuffisants");
        }
    });

    // Vérifier si l'utilisateur est déjà connecté
    function checkSession() {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user && user.role === 'admin') {
            showMainContent();
        }
    }

    // Au chargement de la page
    document.addEventListener('DOMContentLoaded', function() {
        checkSession();
    });
</script>