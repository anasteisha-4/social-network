import avatar1 from '../images/1.jpg';
import avatar2 from '../images/2.jpg';
import avatar3 from '../images/3.jpg';
import avatar5 from '../images/5.jpg';

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: 'Звук клавиш печатной машинки определил дальнейшее развитие',
          likesCount: 10
        },
        {
          id: 2,
          text: 'Постоянный количественный рост не стал ограничивающим фактором',
          likesCount: 5
        },
        {
          id: 3,
          text: 'Но семантический разбор внешних противодействий не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
          likesCount: 2
        }
      ],
      newPostText: ''
    },

    messagesPage: {
      users: [
        { id: 1, name: 'Anastasia' },
        { id: 2, name: 'Bogdan' },
        { id: 3, name: 'Polly' }
      ],

      messages: [
        { id: 1, text: 'Доброе утро ❤️', from: 'user' },
        { id: 2, text: 'Доброе утро ❤️', from: 'me' },
        {
          id: 3,
          text: 'Сука Как сделать чтобы в тик токи не было видно видео',
          from: 'user'
        }
      ],

      newMessageText: ''
    },

    sidebarPage: {
      friends: [
        {
          id: 1,
          name: 'Alexey',
          age: 25,
          city: 'Moscow',
          avatar: avatar1
        },
        {
          id: 2,
          name: 'Maria',
          age: 23,
          city: 'Saint-Petersburg',
          avatar: avatar2
        },
        {
          id: 3,
          name: 'Ivan',
          age: 27,
          city: 'Novosibirsk',
          avatar: avatar3
        },
        {
          id: 4,
          name: 'Olga',
          age: 22,
          city: 'Kazan',
          avatar:
            'https://pm1.aminoapps.com/7099/7d9e3d87e3e0bb58e097e2f974cfefe859d85eacr1-960-960v2_hq.jpg'
        },
        {
          id: 5,
          name: 'Dmitriy',
          age: 26,
          city: 'Ekaterinburg',
          avatar: avatar5
        }
      ]
    }
  },

  _callSubscriber() {
    alert('I do nothing');
  },

  addPost() {
    const newPost = {
      id: Math.max(...this._state.profilePage.posts.map((obj) => obj.id)) + 1,
      text: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this);
  },

  updateNewPostText(postText) {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this);
  },

  sendMessage() {
    const newMessage = {
      id:
        Math.max(...this._state.messagesPage.messages.map((obj) => obj.id)) + 1,
      text: this._state.messagesPage.newMessageText,
      from: 'me'
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this);
  },

  updateNewMessageText(messageText) {
    this._state.messagesPage.newMessageText = messageText;
    this._callSubscriber(this);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  get state() {
    return this._state;
  }
};

export default store;
