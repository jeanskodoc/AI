// Fonction pour vérifier les identifiants
function checkCredentials(username, password) {
  return schoolDatabase.getTeacherAccount(username, password);
}

// Gestion de la soumission du formulaire principal
document.getElementById('gradeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const students = Array.from(document.querySelectorAll('.student-row'));
  const evaluationData = {
    title: document.getElementById('evaluation-title').value,
    subject: document.getElementById('subject').value,
    teacher: document.getElementById('teacher').value,
    date: document.getElementById('evaluation-date').value,
    type: document.getElementById('evaluation-type').value,
    maxGrade: parseInt(document.getElementById('max-grade').value),
    comments: document.getElementById('comments').value
  };
  
  students.forEach(studentEl => {
    const studentName = studentEl.querySelector('.student-name').value;
    const evaluation = {
      ...evaluationData,
      grade: parseFloat(studentEl.querySelector('.grade-input').value),
      appreciation: studentEl.querySelector('.appreciation').value
    };
    
    schoolDatabase.addEvaluation(studentName, evaluation);
  });
  
  alert("Les notes ont été enregistrées avec succès!");
});

// Formulaire d'ajout d'enseignant
document.getElementById('addTeacherForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const teacherData = {
    name: document.getElementById('teacherName').value,
    subject: document.getElementById('teacherSubject').value,
    class: document.getElementById('teacherClass').value,
    username: generateUsername(
      document.getElementById('teacherSubject').value,
      document.getElementById('teacherClass').value
    ),
    password: generatePassword()
  };
  
  const newTeacher = schoolDatabase.addTeacher(teacherData);
  
  // Afficher message de succès...
});

function generateUsername(subject, classCode) {
  const subjectPart = subject.split('-')[0] || subject;
  return `${subjectPart}_${classCode}`.toLowerCase();
}