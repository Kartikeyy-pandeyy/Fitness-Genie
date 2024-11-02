document.addEventListener('DOMContentLoaded', function () {
  
  var showExerciseButton = document.getElementById('show-exercise');
  showExerciseButton.addEventListener('click', showExercise);
});

function showExercise() {
  var exerciseSelect = document.getElementById('exercise-select');
  var selectedExercise = exerciseSelect.options[exerciseSelect.selectedIndex].value;

  var exercisePic = document.getElementById('exercise-pic');

  if (selectedExercise === 'none') {
      alert('Please select an exercise.');
      return;
  }


  var imagePath = './images/exercises/' + selectedExercise + '.svg';


  exercisePic.src = imagePath;
  exercisePic.alt = selectedExercise;
}
