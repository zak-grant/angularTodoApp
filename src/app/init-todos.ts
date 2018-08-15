export class Init {
  load() {
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
      console.log('No Todos Found...Creating...');
      let todos = [
        {
          text: 'Have dinner with Alfred'
        },
        {
          text: 'Install new light on police headquarters'
        },
        {
          text: 'Investigate umbrella theft'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return;
    } else {
      console.log('Found Todos...');
    }
  }
}
