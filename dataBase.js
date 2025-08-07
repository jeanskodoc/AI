// database.js - Base de données centrale pour l'application

const db = {
    // Configuration de l'établissement
    school: {
        name: "Lycée Niamtougou",
        location: "Niamtougou, Togo",
        principal: "M. Kodjo ADAM",
        academicYear: "2024-2025",
        cycles: [
            {
                id: "college",
                name: "Collège",
                levels: ["6ème", "5ème", "4ème", "3ème"]
            },
            {
                id: "lycee",
                name: "Lycée",
                levels: ["Seconde A", "Seconde C", "Première A1", "Première A2", "Première C", "Première D", "Terminale A1", "Terminale A2", "Terminale C", "Terminale D"]
            }
        ],
        subjects: [
            { id: "francais", name: "Français" },
            { id: "mathematiques", name: "Mathématiques" },
            { id: "sciences-physiques", name: "Sciences Physiques" },
            { id: "svt", name: "SVT" },
            { id: "histoire-geographie", name: "Histoire-Géographie" },
            { id: "anglais", name: "Anglais" },
            { id: "allemand", name: "Allemand" },
            { id: "espagnol", name: "Espagnol" },
            { id: "philosophie", name: "Philosophie" },
            { id: "eps", name: "EPS" },
            { id: "informatique", name: "Informatique" },
            { id: "ewe", name: "Éwé" },
            { id: "kabye", name: "Kabyè" }
        ]
    },

    // Données des enseignants
    teachers: [
        {
            id: 1,
            firstName: "Jean",
            lastName: "KOFFI",
            email: "jean.koffi@lycee-niamtougou.tg",
            phone: "+22890123456",
            subjects: ["mathematiques"],
            classes: ["6ème", "5ème"],
            username: "math_6eme",
            password: "math123",
            isAdmin: false
        },
        {
            id: 2,
            firstName: "Awa",
            lastName: "ADJOBI",
            email: "awa.adjobi@lycee-niamtougou.tg",
            phone: "+22890234567",
            subjects: ["francais"],
            classes: ["4ème"],
            username: "francais_4eme",
            password: "francais456",
            isAdmin: false
        },
        {
            id: 3,
            firstName: "Kossi",
            lastName: "TCHAKOUDE",
            email: "kossi.tchakoude@lycee-niamtougou.tg",
            phone: "+22890345678",
            subjects: ["histoire-geographie"],
            classes: ["Seconde A", "Seconde C"],
            username: "histgeo_seconde",
            password: "histoire789",
            isAdmin: true
        }
    ],

    // Données des élèves
    students: [
        {
            id: 1,
            firstName: "Jean-Baptiste",
            lastName: "AKOUETE",
            birthDate: "2007-05-15",
            gender: "M",
            class: "Terminale A1",
            cycle: "lycee",
            parents: [
                {
                    name: "Komlan AKOUETE",
                    relation: "Père",
                    email: "komlan.akouete@example.com",
                    phone: "+22891123456"
                }
            ],
            evaluations: []
        },
        {
            id: 2,
            firstName: "Marie-Claire",
            lastName: "BAWA",
            birthDate: "2010-08-22",
            gender: "F",
            class: "3ème",
            cycle: "college",
            parents: [
                {
                    name: "Afi BAWA",
                    relation: "Mère",
                    email: "afi.bawa@example.com",
                    phone: "+22892234567"
                }
            ],
            evaluations: []
        },
        {
            id: 3,
            firstName: "Emmanuel",
            lastName: "DOSSOU",
            birthDate: "2008-03-10",
            gender: "M",
            class: "Première C",
            cycle: "lycee",
            parents: [
                {
                    name: "Koffi DOSSOU",
                    relation: "Père",
                    email: "koffi.dossou@example.com",
                    phone: "+22893345678"
                }
            ],
            evaluations: []
        },
        {
            id: 4,
            firstName: "Esperance",
            lastName: "KOFFI",
            birthDate: "2011-11-05",
            gender: "F",
            class: "5ème",
            cycle: "college",
            parents: [
                {
                    name: "Yawa KOFFI",
                    relation: "Mère",
                    email: "yawa.koffi@example.com",
                    phone: "+22894456789"
                }
            ],
            evaluations: []
        },
        {
            id: 5,
            firstName: "Patrick",
            lastName: "MENSAH",
            birthDate: "2006-07-30",
            gender: "M",
            class: "Terminale D",
            cycle: "lycee",
            parents: [
                {
                    name: "Kodjo MENSAH",
                    relation: "Père",
                    email: "kodjo.mensah@example.com",
                    phone: "+22895567890"
                }
            ],
            evaluations: []
        }
    ],

    // Données des parents
    parents: [
        {
            id: 1,
            firstName: "Komlan",
            lastName: "AKOUETE",
            email: "komlan.akouete@example.com",
            phone: "+22891123456",
            password: "parent123",
            students: [1], // IDs des élèves associés
            username: "komlan.akouete"
        },
        {
            id: 2,
            firstName: "Afi",
            lastName: "BAWA",
            email: "afi.bawa@example.com",
            phone: "+22892234567",
            password: "parent456",
            students: [2],
            username: "afi.bawa"
        },
        {
            id: 3,
            firstName: "Koffi",
            lastName: "DOSSOU",
            email: "koffi.dossou@example.com",
            phone: "+22893345678",
            password: "parent789",
            students: [3],
            username: "koffi.dossou"
        }
    ],

    // Évaluations et notes
    evaluations: [
        {
            id: 1,
            studentId: 1,
            teacherId: 1,
            subject: "mathematiques",
            class: "Terminale A1",
            title: "Contrôle sur les fonctions",
            type: "Contrôle écrit",
            date: "2024-11-10",
            maxGrade: 20,
            grade: 8.5,
            appreciation: "Moyen - Doit faire plus d'efforts",
            skills: [
                { code: "M1", description: "Résoudre des problèmes mathématiques", level: 2 },
                { code: "M2", description: "Utiliser des outils mathématiques", level: 3 }
            ]
        },
        {
            id: 2,
            studentId: 2,
            teacherId: 2,
            subject: "francais",
            class: "3ème",
            title: "Dictée et rédaction",
            type: "Contrôle écrit",
            date: "2024-11-12",
            maxGrade: 20,
            grade: 15.2,
            appreciation: "Très bon travail",
            skills: [
                { code: "F1", description: "Maîtrise de l'orthographe", level: 4 },
                { code: "F2", description: "Expression écrite", level: 5 }
            ]
        },
        {
            id: 3,
            studentId: 3,
            teacherId: 1,
            subject: "mathematiques",
            class: "Première C",
            title: "Géométrie dans l'espace",
            type: "Devoir maison",
            date: "2024-11-08",
            maxGrade: 20,
            grade: 7.8,
            appreciation: "Des difficultés persistantes",
            skills: [
                { code: "M3", description: "Raisonnement géométrique", level: 2 },
                { code: "M4", description: "Visualisation spatiale", level: 1 }
            ]
        },
        {
            id: 4,
            studentId: 4,
            teacherId: 2,
            subject: "francais",
            class: "5ème",
            title: "Lecture analytique",
            type: "Interrogation orale",
            date: "2024-11-05",
            maxGrade: 20,
            grade: 6.2,
            appreciation: "Doit participer davantage en classe",
            skills: [
                { code: "F3", description: "Compréhension de texte", level: 2 },
                { code: "F4", description: "Expression orale", level: 1 }
            ]
        },
        {
            id: 5,
            studentId: 5,
            teacherId: 1,
            subject: "mathematiques",
            class: "Terminale D",
            title: "Probabilités et statistiques",
            type: "Contrôle écrit",
            date: "2024-11-15",
            maxGrade: 20,
            grade: 17.3,
            appreciation: "Excellent travail",
            skills: [
                { code: "M5", description: "Calcul des probabilités", level: 5 },
                { code: "M6", description: "Analyse statistique", level: 5 }
            ]
        }
    ],

    // Compétences et domaines
    competencies: [
        {
            subject: "mathematiques",
            skills: [
                { code: "M1", description: "Résoudre des problèmes mathématiques" },
                { code: "M2", description: "Utiliser des outils mathématiques" },
                { code: "M3", description: "Raisonnement géométrique" },
                { code: "M4", description: "Visualisation spatiale" },
                { code: "M5", description: "Calcul des probabilités" },
                { code: "M6", description: "Analyse statistique" }
            ]
        },
        {
            subject: "francais",
            skills: [
                { code: "F1", description: "Maîtrise de l'orthographe" },
                { code: "F2", description: "Expression écrite" },
                { code: "F3", description: "Compréhension de texte" },
                { code: "F4", description: "Expression orale" },
                { code: "F5", description: "Analyse littéraire" }
            ]
        },
        {
            subject: "histoire-geographie",
            skills: [
                { code: "H1", description: "Connaissances historiques" },
                { code: "H2", description: "Analyse de documents" },
                { code: "H3", description: "Repérage géographique" }
            ]
        }
    ],

    // Interventions pédagogiques
    interventions: [
        {
            id: 1,
            studentId: 1,
            teacherId: 1,
            date: "2024-10-15",
            type: "Soutien personnalisé",
            subject: "mathematiques",
            description: "Plan de travail individualisé en mathématiques",
            outcome: "Amélioration attendue"
        },
        {
            id: 2,
            studentId: 3,
            teacherId: 3,
            date: "2024-11-02",
            type: "Groupe de travail",
            subject: "sciences-physiques",
            description: "Participation à un groupe de travail en sciences",
            outcome: "En cours"
        },
        {
            id: 3,
            studentId: 4,
            teacherId: 2,
            date: "2024-09-20",
            type: "Entretien avec les parents",
            subject: "francais",
            description: "Discussion sur les difficultés en français et mathématiques",
            outcome: "Plan d'action établi"
        }
    ],

    // Calendrier scolaire
    calendar: [
        {
            id: 1,
            title: "Rentrée scolaire",
            start: "2024-09-02",
            end: "2024-09-02",
            type: "evenement"
        },
        {
            id: 2,
            title: "1er trimestre",
            start: "2024-09-02",
            end: "2024-12-06",
            type: "trimestre"
        },
        {
            id: 3,
            title: "Vacances 1er trimestre",
            start: "2024-12-09",
            end: "2024-12-27",
            type: "vacances"
        },
        {
            id: 4,
            title: "2ème trimestre",
            start: "2025-01-06",
            end: "2025-03-21",
            type: "trimestre"
        }
    ]
};

// Fonctions utilitaires pour accéder aux données
db.getStudentById = function(id) {
    return this.students.find(student => student.id === id);
};

db.getStudentsByClass = function(className) {
    return this.students.filter(student => student.class === className);
};

db.getTeacherById = function(id) {
    return this.teachers.find(teacher => teacher.id === id);
};

db.getEvaluationsByStudent = function(studentId) {
    return this.evaluations.filter(eval => eval.studentId === studentId);
};

db.getEvaluationsByClass = function(className) {
    return this.evaluations.filter(eval => eval.class === className);
};

db.getParentByStudent = function(studentId) {
    return this.parents.find(parent => parent.students.includes(studentId));
};

db.getSubjectName = function(subjectId) {
    const subject = this.school.subjects.find(sub => sub.id === subjectId);
    return subject ? subject.name : subjectId;
};

db.getClassName = function(classId) {
    // Convertit l'ID de classe en nom affichable
    const classMap = {
        "6eme": "6ème",
        "5eme": "5ème",
        "4eme": "4ème",
        "3eme": "3ème",
        "seconde-a": "Seconde A",
        "seconde-c": "Seconde C",
        // ... autres classes
    };
    return classMap[classId] || classId;
};

// Initialisation des données (mise à jour des références)
function initializeData() {
    // Associer les évaluations aux élèves
    db.evaluations.forEach(evaluation => {
        const student = db.getStudentById(evaluation.studentId);
        if (student) {
            student.evaluations.push(evaluation.id);
        }
    });
    
    // Calculer les moyennes des élèves
    db.students.forEach(student => {
        const studentEvals = db.getEvaluationsByStudent(student.id);
        if (studentEvals.length > 0) {
            const total = studentEvals.reduce((sum, eval) => sum + (eval.grade / eval.maxGrade) * 20, 0);
            student.average = total / studentEvals.length;
        }
    });
}

// Initialiser les données au chargement
initializeData();

// Export pour utilisation dans les pages HTML
window.SchoolDB = db;