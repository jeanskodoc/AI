// Au début du script
const studentsData = schoolDatabase.students.map(student => {
  // Calculer la moyenne générale
  const avg = student.evaluations.length > 0 ? 
    student.evaluations.reduce((sum, eval) => sum + (eval.grade / eval.maxGrade) * 20, 0) / student.evaluations.length :
    0;
  
  // Identifier les matières en difficulté (moyenne < 10/20)
  const strugglingSubjects = [];
  const subjects = {};
  
  student.evaluations.forEach(eval => {
    if (!subjects[eval.subject]) {
      subjects[eval.subject] = [];
    }
    subjects[eval.subject].push((eval.grade / eval.maxGrade) * 20);
  });
  
  for (const [subject, grades] of Object.entries(subjects)) {
    const subjectAvg = grades.reduce((a, b) => a + b, 0) / grades.length;
    if (subjectAvg < 10) {
      strugglingSubjects.push(subject);
    }
  }
  
  return {
    id: student.id,
    name: student.name,
    class: student.class,
    cycle: student.class.includes('ème') ? 'college' : 'lycee',
    averageGrade: avg,
    subjects: subjects,
    strugglingSubjects: strugglingSubjects,
    evolution: getEvolution(avg, student.evaluations)
  };
});

function getEvolution(average, evaluations) {
  if (evaluations.length < 2) return 'stable';
  
  // Logique simplifiée pour déterminer l'évolution
  const lastTwo = evaluations.slice(-2);
  const lastGrade = (lastTwo[1].grade / lastTwo[1].maxGrade) * 20;
  const prevGrade = (lastTwo[0].grade / lastTwo[0].maxGrade) * 20;
  
  if (lastGrade - prevGrade > 3) return 'amélioration';
  if (lastGrade - prevGrade > 1) return 'légère amélioration';
  if (prevGrade - lastGrade > 3) return 'dégradation';
  if (prevGrade - lastGrade > 1) return 'légère dégradation';
  return 'stable';
}