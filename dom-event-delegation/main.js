var $taskList = document.querySelector('.task-list');

function taskListHandler(event) {
  console.log('event.target:', event.target);
  console.log('event.target.name:', event.target.tagName);

  if (event.target && event.target.nodeName === 'BUTTON') {
    var el = event.target.closest('.task-list-item');
    console.log('.task-list-item:', el);
    el.remove();
  }
}

$taskList.addEventListener('click', taskListHandler);
