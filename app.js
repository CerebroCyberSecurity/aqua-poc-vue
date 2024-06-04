new Vue({
  el: '#app',
  data: {
    userInput: '',
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ],
    search: ''
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.name.includes(this.search));
    }
  },
  methods: {
    addUser() {
      const newUser = { id: this.users.length + 1, name: this.userInput };
      this.users.push(newUser);
      this.userInput = '';
    }
  },
  template: `
    <div>
      <h1>Vulnerable Vue App</h1>
      <input v-model="search" placeholder="Search users">
      <ul>
        <li v-for="user in filteredUsers" :key="user.id" v-html="user.name"></li>
      </ul>
      <input v-model="userInput" placeholder="Add user">
      <button @click="addUser">Add User</button>
    </div>
  `
});
