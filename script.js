const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const message = document.getElementById('message');

const motivateMessages = [
  "Keep shining like Jimin's smile! ✨",
  "You're as strong as Jungkook's will! 💪",
  "Cooky and Chimmy believe in you! 💖",
  "Another task down, you're amazing! 🌟",
  "You got this, just like Jikook's bond! 💜"
];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      const msg = motivateMessages[Math.floor(Math.random() * motivateMessages.length)];
      message.textContent = msg;
      setTimeout(() => (message.textContent = ''), 3500);
    }
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '✕';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    message.textContent = '';
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = '';
});
